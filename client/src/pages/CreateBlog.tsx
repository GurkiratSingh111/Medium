import axios from "axios"
import Appbar from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    async function publishPost(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{"title":title, "content":description
            },{headers: {'Authorization': localStorage.getItem('token') }})
            console.log(response.data.id)
            navigate(`/blog/${response.data.id}`)
            setTitle("");
            setDescription("");
        }catch(error){
            alert("Error while creating the blog")
        }
    }
  return (
    <div>
        <Appbar/>
        <div className="h-screen w-screen flex flex-col items-center m-10">
            <div className="w-2/4 m-5">
                <label  className="block mb-2 font-bold text-3xl 
                dark:text-black ">Title</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className="bg-gray-50 border border-gray-300
                text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:placeholder-gray-400
                dark:text-black" placeholder="Enter the title here..." required />
            </div>
            <div className="w-2/4 m-5 mt-0">
                <label  className="block mb-2 font-bold text-3xl text-black">Content</label>
                <textarea rows={8} onChange={(e)=>setDescription(e.target.value)} value={description} className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 dark:placeholder-gray-400 text-black " placeholder="Write the blog content heres..."></textarea>
                <button type="button" onClick={publishPost}  className="mt-5 focus:outline-none text-white bg-black hover:bg-gray-700 focus:ring-4 font-medium rounded-3xl text-lg px-5 py-2.5 me-2 mb-2">Publish</button>
            </div>
            
        </div>
    </div>
  )
}

export default CreateBlog
