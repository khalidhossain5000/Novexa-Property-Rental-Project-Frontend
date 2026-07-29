import * as z from "zod"; 


export const registerSchema=z.object({
    firstName:z.string().min(1,"First Name Is Required"),
    lastName:z.string().min(1,"Last Name Is Required"),
    password:z.string().min(6,"Password must be atleast 6 characters"),
    email: z.string().email("Invalid email"),
    role:z.string().optional()
})