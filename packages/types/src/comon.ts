import { z } from "zod";
import { passwordSchema, usernameSchema } from "./util";


export const Signin = z.object({
    username: usernameSchema,
    password:passwordSchema
});

