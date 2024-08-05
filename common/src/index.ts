
import z from "zod";

export const signupinput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
});


//type inference in zod
export type SignupInput = z.infer<typeof signupinput>


export const signininput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
});


//type inference in zod
export type SigninInput = z.infer<typeof signininput>

export const createBlog = z.object({
    title: z.string(),
    content: z.string(),
});

export type createBlogInput = z.infer<typeof createBlog>


export const updateBlog = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
});

export type updateBlogInput = z.infer<typeof updateBlog>
