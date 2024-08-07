import Appbar from "../components/Appbar"

const CreateBlog = () => {
  return (
    <div>
        <Appbar/>
        <div className="h-screen w-screen flex flex-col items-center m-10">
            <div className="w-2/4 m-5">
                <label  className="block mb-2 font-bold text-3xl 
                dark:text-black ">Title</label>
                <input type="text" className="bg-gray-50 border border-gray-300
                text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:placeholder-gray-400
                dark:text-white" placeholder="Enter the title here..." required />
            </div>
            <div className="w-2/4 m-5 mt-0">
                <label  className="block mb-2 font-bold text-3xl text-black">Content</label>
                <textarea rows={8} className="block p-2.5 w-full rtext-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:placeholder-gray-400 dark:text-white " placeholder="Write the blog content heres..."></textarea>
                <button type="button" className="mt-5 focus:outline-none text-white bg-black hover:bg-gray-700 focus:ring-4 font-medium rounded-3xl text-lg px-5 py-2.5 me-2 mb-2">Publish</button>
            </div>
            
        </div>
    </div>
  )
}

export default CreateBlog
