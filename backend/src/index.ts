import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'


const app = new Hono<{
  Bindings: {
    DATABASE_URL :string
    JWT_SECRET: string
  }}>()
  
// app.route("/api/v1/user", userRouter);
// app.route("/api/v1/blog", blogRouter);

app.post("/api/v1/user/signup", async(c)=>{
  const body = await c.req.json();
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

app.post("api/v1/user/signin", async(c)=>{
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  //zod, password hashing left
  try{
    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password,
        name: body.name
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
app.post("/api/v1/blog", (c)=>{
  return c.text("Hello Hono");
})
app.put("/api/v1/blog", (c)=>{
  return c.text("Hello Hono");
})
app.get("/api/v1/blog", (c)=>{
  return c.text("Hello Hono2");
})
app.get("/api/v1/blog/bulk", (c)=>{
  return c.json({message: "Bulk fetched"})
})


export default app




