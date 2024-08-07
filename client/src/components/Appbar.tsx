import { Link } from "react-router-dom"
import Avatar from "./Avatar"


const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-1">
        <div className="flex flex-col justify-center font-bold text-2xl">
            <Link to={"/blogs"}><div className="cursor-pointer">Medium.</div></Link>
        </div>
        <div>
            <Link to={"/publish"}>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 me-2 mb-2 mt-2">Create Blog</button>
            </Link>
        
            <Avatar authorName="Harkirat Singh"/>

        </div>
      
    </div>
  )
}

export default Appbar
