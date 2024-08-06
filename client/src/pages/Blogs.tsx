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
                    authorName={blog.author.name || "Anonymous"}
                    title={blog?.title}
                    content={blog?.content}/>

                })}
                <BlogCard 
                authorName={"Gurkirat Singh"}
                title={`How an Ugly Single-Page Website Makes 
                    $5000 a Month with Affiliate Marketing`}
                content={`No need to create a fancy modern website with hundreds of pages to make money 
                online. - Making money online is the dream of man....
                `}
                publishedDate={"2nd Feb 2024"}/>
                <BlogCard 
                authorName={"Gurkirat Singh"}
                title={`How an Ugly Single-Page Website Makes 
                    $5000 a Month with Affiliate Marketing`}
                content={`No need to create a fancy modern website with hundreds of pages to make money 
                online. - Making money online is the dream of man....
                `}
                publishedDate={"2nd Feb 2024"}/>
            </div>
            </div>
        </div>
    
  )
}

export default Blogs
