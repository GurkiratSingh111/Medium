import Avatar from "./Avatar"


const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-1">
        <div className="flex flex-col justify-center font-bold text-2xl">
            <div>Medium.</div>
        </div>
        <div>
            <Avatar authorName="Harkirat Singh"/>

        </div>
      
    </div>
  )
}

export default Appbar
