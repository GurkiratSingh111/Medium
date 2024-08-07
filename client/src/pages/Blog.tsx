import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import BlogPage from "../components/BlogPage";
import Appbar from "../components/Appbar";
import BlogSkeleton from "../components/BlogSkeleton";



const Blog = () => {
    const {id}= useParams()
    const {loading, blog}= useBlog({
        id: id || ""
    } );
    if(loading){
        return <div>
            <Appbar/>
            <div className="flex justify-center w-full">
                    <BlogSkeleton/>
            </div>
        </div>
        
    }
    if(!blog){
        return <div>No blog found</div>
    }
  return (
    <BlogPage blog={blog}/>
  )
}

export default Blog
