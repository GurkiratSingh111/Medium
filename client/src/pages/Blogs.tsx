import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"

const Blogs = () => {
    const {loading, blogs}= useBlogs();
    console.log(blogs);

    if(loading){
        return <div>Loading...</div>
    }
    return (
        <div >
            <Appbar/>
            <div className="flex justify-center">
            <div className="flex justify-center flex-col max-w-2xl">
                {blogs.map((blog)=>{
                    return <BlogCard 
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}/>

                })}
            </div>
            </div>
        </div>
    
  )
}

export default Blogs
