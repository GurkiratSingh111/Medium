import { Link, useNavigate } from "react-router-dom"
import Input from "./Input";
import { useState } from "react";
import { SignupInput } from "@gurkirat2000/medium-blog";
import {BACKEND_URL} from "../config"
import axios from "axios";

const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState<SignupInput>({
        username: "",
        name: "",
        password: ""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"? "signup": "signin"}`
            ,inputs);
            console.log(inputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            console.log(jwt);
            navigate("/blogs");
        }catch(error){
            alert("Error while signing up")
        }
        
    }
  return (
    <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center items-center flex-col">
            <div className="font-extrabold text-3xl">
                {type === "signup" ? "Create an Account" : "Sign In"}
               
            </div>
            <div className="font-normal text-slate-500">
            {type === "signup" ? "Already have an account?" : "Don't have an account?"}
            {type === "signup" ? <Link to={"/signin"} className="pl-2 underline">Sign In</Link> :<Link to={"/signup"} className="pl-2 underline">Signup</Link> }
            </div>
            {type==="signup" && <Input label="Name" placeholder="Enter your username" onChange={(e:any)=>{
                setInputs({...inputs, name: e.target.value})
            }}/>}
            <Input label="Email" placeholder="m@example.com" onChange={(e:any)=>{
                setInputs({...inputs, username: e.target.value})
            }}/>
            <Input label="Password" type={"password"} placeholder="12345" onChange={(e:any)=>{
                setInputs({...inputs, password: e.target.value})
            }}/>
            <button type="button" className="w-7/12 p-2 mt-8 text-white bg-gray-800
             hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
             font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800
              dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={sendRequest}>
                {type==="signup" ? "Sign Up" :"Sign In" }</button>
        </div>

    </div>
  )
}

export default Auth;
