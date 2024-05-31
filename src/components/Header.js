import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUsers, removeUsers } from "../utils/userSlice";
import { updategptsearch } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLang } from "../utils/configSlice";
const Header=()=>{
 const dispatch=useDispatch()
 const navigate=useNavigate()
  //  onauth state change is like a event listener whenever there is a change in state it is called 
// but we want to execute it only once so use it inside useeffect hook
// whenever user signs in or sign out state gets updated inside the redux store
useEffect(()=>{
  // onauthstatechange returns an unsubscribe function
  const unsubscribe=onAuthStateChanged(auth, (user) => {
 if(user) { 
   const {uid,displayName,email,photoURL} = user;
   dispatch(addUsers({uid:uid,displayName:displayName,email:email,photoURL:photoURL}))
   navigate("/browse")
   // ...
 } else {
   // User is signed out
   dispatch(removeUsers());
   navigate("/")
 }
})
// to remove onauthstate change when component unmounts
  return ()=>unsubscribe();
},[])
 const user=useSelector((store)=>store.user)
 const handleSignout=()=>{
   signOut(auth).then(() => {
      // Sign-out successful navigate to login page
   }).catch((error) => {
     // An error happened.
   });
 }
 const showgpt=useSelector((store)=>store.gpt.showgptsearch)
//  handling the gpt search button
 const handleClick=()=>{
  dispatch(updategptsearch())
 }
//  we can also use useref hook
 const handleChange=(e)=>{
  dispatch(changeLang(e.target.value))
 }
 return(
    <div className="w-screen absolute px-8 bg-gradient-to-b from-black z-10 flex justify-between">
        {/* adding logo from netflix website */}
        <img className="w-32 h-24" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
        {/* if user is present then only show this */}
        {user && < div className="flex py-2">
          {showgpt && <select className="px-4 bg-black text-white mr-4" onClick={handleChange}>
            {/* created an array of constant and updating the values of dropdown with map function*/}
            {
              SUPPORTED_LANG.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
            }
          </select>}
            <button className="bg-purple-800 text-white mr-4 py-2 px-4 rounded-lg" onClick={handleClick}>GPT Search</button>
            <img className="h-10 w-10 rounded-full mr-2" src={user.photoURL} alt="logo"/>
            <h1 className="text-white font-bold cursor-pointer" onClick={handleSignout}>Sign out</h1>
        </div>
       }
    </div>
 )
}
export default Header;