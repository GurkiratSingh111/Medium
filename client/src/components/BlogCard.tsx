
interface BlogCardProps{
    authorName: string,
    title: string,
    content: string,
    publishedDate: string

}



const BlogCard = ({authorName, title, content, publishedDate}: BlogCardProps) => {
    const words = authorName.trim().split(' ');
    const firstInitial = words[0][0].toUpperCase();
    const lastInitial = words.length > 1 ? words[words.length - 1][0].toUpperCase(): "";

  return (
    <div className="flex flex-col">
        <div className="flex">
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-400">
            <span className="font-medium text-gray-600 dark:text-gray-300">{firstInitial}{lastInitial}</span>    
        </div>
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
