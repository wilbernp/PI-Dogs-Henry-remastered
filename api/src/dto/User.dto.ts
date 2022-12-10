import { z } from "zod";

const PASS_MSG = "Password must contain at least 8 characters"
const EMAIL_MSG = "Invalid email"


export const createUserDTO = z.object({
    name: z.string({ required_error:"name is required"}),
    lastname: z.string(),
    email: z.string().email({ message: EMAIL_MSG }),
    password: z.string().min(8, { message: PASS_MSG }),
    confirm: z.string()
})

export const loginUserDTO = z.object({
    email: z.string().email(),
    password: z.string()
})

