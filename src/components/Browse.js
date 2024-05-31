import { useSelector } from "react-redux";
import usePopulardata from "../utils/usePopulardata";
import useData from "../utils/usedata";
import Header from "./Header";
import Maincontainer from "./Maincontainer";
import Secondrycontainer from "./Secondry";
import GptSearch from "./GptSearch";

const Browse=()=>{
    useData();
    usePopulardata();
    // subscribing to the store
    const showgpt=useSelector((store)=>store.gpt.showgptsearch)
 return(
    <div>
        <Header/>
        {/* we are dividing the browse page in two parts main container and secondry container*/}
        {/* if show gpt is true show gpt search other wise show main and secondry container */}
    {
        showgpt?<GptSearch/>
        : 
        // wrapping the components inside react.fragment
     <>
        <Maincontainer/>
        <Secondrycontainer/>
    </>
    }
    </div>
 )
}
export default Browse;