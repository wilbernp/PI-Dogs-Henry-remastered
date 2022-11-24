import { IUserTokenPayload } from "../../src/interfaces/User.interfaces";

declare global{
    namespace Express {
        interface Request {
            user:IUserTokenPayload
        }
    }
}