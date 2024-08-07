import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import BlogPage from "./BlogPage";



const Blog = () => {
    const {id}= useParams()
    const {loading, blog}= useBlog({
        id: id || ""
    } );
    if(loading){
        return <div>Loading...</div>
    }
    if(!blog){
        return <div>No blog found</div>
    }
  return (
    <BlogPage blog={blog}/>
  )
}

export default Blog
