import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
interface BlogProps {
    author: {
        name: string
    },
    title: string,
    content: string,
    id: number
}
export const useBlogs = () =>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogProps[]>([]);


    useEffect(()=>{
        const fetchBlogs = async () => {
            try{
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                });
                setBlogs(response.data.blog);
                setLoading(false);
            }catch(error){
                alert(error);
            }
        }
        fetchBlogs();
    },[])


    return {
        loading, blogs
    }


}