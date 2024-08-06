import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createBlog, updateBlog } from "@gurkirat2000/medium-blog";


export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL :string
      JWT_SECRET: string
    },
    Variables:{
        userId: number
    }
}>()


blogRouter.use("/*", async(c,next)=>{
    //extracts the user id
    //pass it down to the router handler
    const authHeader = c.req.header("authorization") || "";
    try{
        const user = await verify(authHeader, c.env.JWT_SECRET);
        if(user){
            const id = user.id as number
            c.set("userId", id)
            await next();
        }
        else{
            c.status(403);
            return c.json({
                message: "You are not logged in"
            })
    }}
    catch(error){
        c.status(403);
        return c.json({message: "Incorrect Token"})
    }
    
})

blogRouter.post("/", async(c)=>{
    const body = await c.req.json();
    const {success} = createBlog.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            message: "Invalid Input"
            })
        }
    
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: Number(authorId),
        }
    })
    return c.json({
        id: blog.id
    })
})
    
blogRouter.put("/", async(c)=>{
    const body = await c.req.json();
    const {success} = updateBlog.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({
            message: "Invalid Input"
            })
        }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })
    return c.json({
        id: blog.id
    })
})
//TODO: pagination
blogRouter.get("/bulk", async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blog = await prisma.blog.findMany({
        select:{
            content: true,
            title: true,
            id: true,
            author:{
                select: {
                    name: true,
                }
            }
        }
    });

    return c.json({
        blog
    }); 
})
blogRouter.get("/:id", async(c)=>{
    const id = Number(c.req.param("id"));
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try{
        const blog = await prisma.blog.findFirst({
            where: {
                id
            }
        })
        return c.json({
            blog
        })
    }
    catch(e){
        c.status(411);
        return c.json({
            message: "Error while fetching"
        })
    }
    
})
