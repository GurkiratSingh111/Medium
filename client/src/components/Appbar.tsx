import { Link } from "react-router-dom"
import Avatar from "./Avatar"


const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-1">
        <div className="flex flex-col justify-center font-bold text-2xl">
            <Link to={"/"}><div className="cursor-pointer">Medium.</div></Link>
            
        </div>
        <div>
            <Avatar authorName="Harkirat Singh"/>

        </div>
      
    </div>
  )
}

export default Appbar
