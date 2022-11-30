import { TokenPayloadInterface } from "@/interfaces/auth.interfaces";



declare global{
    namespace Express {
        interface Request {
            user:TokenPayloadInterface
        }
    }
}