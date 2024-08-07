
const BlogSkeleton = () => {
  return (
      <div role="status" className="animate-pulse flex justify-between m-5 w-full">
        <div className="w-4/5 mr-5"> 
          <div>
          <div className="h-14 bg-gray-200 rounded-full w-3/4 mb-4"></div>
            <div className="text-slate-500 font-medium mt-2">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full  w-3/4 mb-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full  w-3/4 mb-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full  w-3/4 mb-4"></div>
            <div className="h-2.5 bg-gray-200 rounded-full  w-3/4 mb-4"></div>

          </div>
        </div>
        <div className="flex flex-col w-2/5 justify-start items-start">
            <div className="h-8 bg-gray-200 rounded-full  w-48 mb-4"></div>
          <div className="m-2">
            <div className="flex ml-0 p-2 pb-0 mb-0">
            <div className="h-12 bg-gray-200 rounded-full w-12 mt-2"></div>
              <div className="m-2 ml-0">
            
              </div>
              <div className="flex flex-col justify-center ">
              <div className="h-8 bg-gray-200 rounded-full mb-2.5">
              </div>
              <div className="h-2 mt-2 bg-gray-200 rounded-full w-60 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full w-60 mb-4"></div>
              </div>
            </div> 
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
  )
}

export default BlogSkeleton
