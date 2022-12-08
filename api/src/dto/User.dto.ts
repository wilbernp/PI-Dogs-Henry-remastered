import { z } from "zod";

const PASS_MSG = "Password must contain at least 8 characters"
const EMAIL_MSG = "Invalid email"
const CONFIRM_MSG = "Passwords don`t match"

export const createUserDTO = z.object({
    name: z.string({ required_error:"name is required"}),
    lastname: z.string(),
    email: z.string().email({ message: EMAIL_MSG }),
    password: z.string().min(8, { message: PASS_MSG }),
    confirm: z.string()
})

// createUserDTO.refine((data) => data.password === data.confirm, {
//     message: "Passwords don't match",
//     path: ["confirm"], // path of error
// })

export const loginUserDTO = z.object({
    email: z.string().email(),
    password: z.string()
})

