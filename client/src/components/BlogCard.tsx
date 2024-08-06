import Avatar from "./Avatar"

interface BlogCardProps{
    authorName: string,
    title: string,
    content: string,
    publishedDate: string

}



const BlogCard = ({authorName, title, content, publishedDate}: BlogCardProps) => {
    

  return (
    <div className="flex flex-col">
        <div className="flex">
            <Avatar authorName={authorName}/>
            <div className="text-slate-500">{authorName}. {publishedDate}</div>
        </div>
        <div className="font-bold text-2xl">{title}</div>
        <div className="text-lg">
            {content.slice(0,100) + "..."}
        </div>
        <div className="mt-8 text-slate-700">
            {`${Math.floor(content.length/100)} minutes read`}
        </div>
        <div className="bg-slate-200 h-1 w-4/6"  />
      
    </div>
  )
}

export default BlogCard
