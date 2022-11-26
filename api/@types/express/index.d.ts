// import { IUserTokenPayload } from "../../src/interfaces/User.interfaces";

import { IUserTokenPayload } from "../../src/components/Users/User.interfaces";


declare global{
    namespace Express {
        interface Request {
            user:IUserTokenPayload
        }
    }
}