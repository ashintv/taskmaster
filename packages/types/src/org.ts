import { z } from "zod";
import { passwordSchema, usernameSchema } from "./util";


export const OrgCompleteForm = z.object({
        name:z.string().min(4, "must contain atleast 4 charecters"),
        email:z.string().email("Incorrect e mail format"),
        address:z.string(),
        image:z.string().url()

})

export const createOfficeForm = z.object({
    name:z.string(),
    username:usernameSchema,
    desc:z.string()

})
