import { useState,useRef } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"; 
import { useNavigate } from "react-router-dom";
import {updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";
import { BGURL } from "../utils/constants";
const Login=()=>{
  const dispatch=useDispatch();
  // using state variable to change the sign in state and based on that update the form
  const[isSignIn,setIsSignIn]=useState(true);
  // using useRef hook to create a referrence for the input fields so that we can access the value of input box
  const email=useRef(null)
  const password=useRef(null)
  const name=useRef(null)
  const[errorMessage,setErrorMessage]=useState(null)
  const manageClick=()=>{
    // changing the value of sign in on click 
    setIsSignIn(!isSignIn);
  }
  const handleClick=()=>{
    // calling validate form function
  //  console.log(name)
  //  console.log(email)
  //  console.log(password)
   const message=validateForm(email.current.value,password.current.value)
   setErrorMessage(message)
  //  if there is an error in form validation return
   if(message) return;
 //otherwise check if it is a sign in form or signup form  
   if(!isSignIn){
  //  user sign up logic
 createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
//  as the user signs in update profile
  .then((userCredential) => {  
    updateProfile(auth.currentUser, {
       displayName:name.current.value, photoURL: "https://avatars.githubusercontent.com/u/92983001?v=4"
   }).then(() => {
  // Profile updated! dipatch adduser action again with the updated value with auth.currentuser
  const {uid,displayName,email,photoURL} =auth.currentUser;
  dispatch(addUsers({uid:uid,displayName:displayName,email:email,photoURL:photoURL}))
  // ...
   }).catch((error) => {
  // An error occurred
  // ...
  });
    // Signed up 
    const user = userCredential.user;
    // if succesfully registered user object is returned
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+"-"+errorMessage)
  });
   }
   else{
  // user sign in logic
   signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+"-"+errorMessage)
    });
   }
  }
  return(
    <div>
        <Header/>
        <div className="absolute">
         {/* adding bg image */}
         <img src={BGURL} alt="img"/>
       </div>
       {/* creating a form*/}
        <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 bg-black bg-opacity-75 p-10 absolute mt-28 mx-auto left-0 right-0 text-white">
          <h1 className="text-white text-3xl mb-8">{isSignIn===true?"Sign In":"Sign Up"}</h1>
          {/* if is sign value is false then only name field will be diaplayed*/}
            {isSignIn===false&&<input ref={name}type="text" placeholder="Enter Your Name" className="py-2 m-2 px-2 w-full bg-gray-500"/>}
            <input ref={email} type="text"placeholder="Email" className="py-2 m-2 px-2 w-full bg-gray-500"/>
            <input ref={password} type="password" placeholder="Password" className="py-2 px-2 m-2 w-full bg-gray-500"/>
            <button className="bg-red-700 mt-6 px-10 py-2 rounded-lg w-full ml-2" onClick={handleClick}>{isSignIn===true?"Sign In":"Sign Up"}</button>
            <h1 className="text-red-600 font-bold mt-4 ml-2">{errorMessage}</h1>
            {/* adding event handler */}
            <h1 className="m-4 cursor-pointer" onClick={manageClick}>{isSignIn===true?"New to Neflix ? Sign Up now":"Already Registered ? Sign In"}</h1>
        </form>
    </div>
  )
}
export default Login;