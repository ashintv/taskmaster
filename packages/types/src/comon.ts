import { z } from "zod";
import { passwordSchema, usernameSchema } from "./util";


export const SigninZSchema = z.object({
    username: usernameSchema,
    password:passwordSchema
});

