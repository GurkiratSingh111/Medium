import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signininput, signupinput } from "@gurkirat2000/medium-blog";

import z from "zod"

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL :string
      JWT_SECRET: string
    }}>()


      

userRouter.post("/signup", async(c)=>{
    const body = await c.req.json();
    const {success} = signupinput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message: "Invalid Input"
      })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    //zod, password hashing left
    try{
      const user = await prisma.user.create({
        data: {
          username: body.username,
          password: body.password,
          name: body.name
        }
      })
      const jwt = await sign({
        id: user.id
      },c.env.JWT_SECRET )
  
  
      return c.json({"message": "Signed Up!!", "jwt": jwt });
    }
    catch(e){
      c.status(411);
      return c.json({"message": "User already exists"})
    }
  })
  
  userRouter.post("/signin", async(c)=>{
    const body = await c.req.json();
    const {success} = signininput.safeParse(body);
    if(!success){
      c.status(411)
      return c.json({
        message: "Invalid Input"
      })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    //zod, password hashing left
    try{
      const user = await prisma.user.findFirst({
        where: {
          username: body.username,
          password: body.password,
        }
      })
      if(!user){
        c.status(403); //Unauthorized
        return c.json({"message": "Invalid credentials"})
      }
  
      const jwt = await sign({
        id: user.id
      },c.env.JWT_SECRET )
  
  
      return c.json({"message": "Signed In!!", "jwt": jwt });
    }
    catch(e){
      c.status(411);
      return c.json({"message": "Invalid"})
    }
    
  })