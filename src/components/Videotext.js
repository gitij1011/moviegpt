
const Videotext=(props)=>{
    // destructuring the props
   const{movietitle,desc}=props
    return(
        <div className="pt-60 px-24 absolute w-screen aspect-video text-white font-medium bg-gradient-to-r from-black">
            <h1 className="text-2xl font-bold mt-4">{movietitle}</h1>
            <p className="w-1/3 mt-4">{desc}</p>
            <div className="mt-4">
                <button className="bg-gray-500 text-white bg-opacity-50 font-semibold rounded-lg px-10 py-4 mr-2 hover:bg-black">Play</button>
                <button className="bg-gray-500 bg-opacity-50 text-white font-semibold px-10 py-4 rounded-lg hover:bg-black">More Info</button>
            </div>
        </div>
    )
}
export default Videotext;