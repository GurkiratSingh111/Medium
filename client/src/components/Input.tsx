import { ChangeEvent} from "react";

interface InputType {
    label: string;
    placeholder: string;
   onChange:  (e: ChangeEvent<HTMLInputElement>)=> void;
   type?: string;
}

const Input = ({label, placeholder, onChange, type}: InputType) => {
  return (
     <div className="w-full flex flex-col items-center m-2">
        <div className="flex flex-col items-start w-7/12">
            <label className="block mb-2 text-md font-medium
             text-gray-900 dark:text-black">{label}</label>
            <input id={label} type={type || "text"} className="font-semibold bg-gray-50 border
             border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700
              "
                placeholder={placeholder} required onChange={onChange}/>

        </div>
            
    </div>
  )
}

export default Input
