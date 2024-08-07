import Appbar from "./Appbar";
import Avatar from "./Avatar";

interface BlogProps {
  author: {
    name: string;
  };
  title: string;
  content: string;
  id: number;
}

const BlogPage = ({ blog }: { blog: BlogProps }) => {
  return (
    <div className="flex flex-col w-full ">
      <Appbar />
      <div className="flex justify-between m-5">
        <div className="w-3/5 mr-5">
          <div>
            <div className="text-5xl font-bold">{blog.title}</div>
            <div className="text-slate-500 font-medium mt-2">
              Posted on August 24, 2023
            </div>
            <div className="text-slate-800 mt-2">{blog.content}</div>
          </div>
        </div>
        <div className="flex flex-col w-2/5 ml-10 justify-start items-start">
          <div className="mt-4 font-medium text-2xl text-gray-600">Author</div>
          <div>
            <div className="flex m-3 ml-0 p-2 pb-0 mb-0">
              <div className="m-2 ml-0">
                <Avatar authorName={blog.author.name || "Anonymous"} />
              </div>
              <div className="flex flex-col justify-center ">
                <div className="text-xl font-bold">{blog.author.name || "Anonymous"}</div>
                <div className="text-gray-400 mt-2">Random catch phrase about the author's ability to grab the user's attention</div>
              </div>
            </div>
            
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default BlogPage;
