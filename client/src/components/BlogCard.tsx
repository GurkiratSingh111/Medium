import { Link } from "react-router-dom"
import Avatar from "./Avatar"
import Circle from "./Circle"

interface BlogCardProps{
    authorName: string,
    title: string,
    content: string,
    publishedDate?: string,
    id: Number

}

const BlogCard = ({authorName, title, content, publishedDate, id}: BlogCardProps) => {
    

  return (
    <Link to={`/blog/${id}`}>
    <div className="flex flex-col m-2 border-b border-slate-200 pb-2 cursor-pointer">
        <div className="flex">
            <Avatar authorName={authorName}/>
            <div className="text-slate-500 flex items-center ml-2 font-medium">{authorName}</div>
            <div className="flex flex-col justify-center m-2">
                <Circle/>
            </div>
            
            <div className="text-slate-500 flex items-center ml-2">{publishedDate}</div>
        </div>
        <div className="font-bold text-2xl mt-4">{title}</div>
        <div className="text-lg mt-2">
            {content.slice(0,100) + "..."}
        </div>
        <div className="mt-8 text-slate-500 pb-2">
            {`${Math.floor(content.length/100)} minute(s) read`}
        </div>
      
    </div>
    </Link>
  )
}

export default BlogCard
