import * as z from "zod"; 


export const registerSchema=z.object({
    firstName:z.string().min(1,"First Name Is Required"),
    lastName:z.string().min(1,"Last Name Is Required"),
    password:z.string().min(6,"Password must be atleast 6 characters"),
    email: z.string().min(1,"Invalid email"),
    role:z.string().optional()
})



export const loginSchema=z.object({
    email: z.string().min(1,"Invalid email"),
        password:z.string().min(1,"Password cant be empty"),
})