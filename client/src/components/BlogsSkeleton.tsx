import Circle from "./Circle"


const Skeleton = () => {
  return (<div role="status" className=" animate-pulse m-5 w-full h-full flex flex-col justify-center items-center">
    <div className="flex flex-col m-2 border-b w-full h-full border-slate-200 pb-2 cursor-pointer">
        <div className="flex">
            <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            <div className="flex flex-col justify-center m-1">
                <Circle/>
            </div>
            
            <div className="text-slate-500 flex items-center ml-2">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="text-lg mt-2">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="mt-8 text-slate-500 pb-2">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      
    </div>
    <span className="sr-only">Loading...</span>
</div>


  )
}

export default Skeleton
