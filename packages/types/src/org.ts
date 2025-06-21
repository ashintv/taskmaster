import { z } from "zod";
import { passwordSchema, usernameSchema } from "./util";


export const OrgCompleteZSchema = z.object({
    name:z.string(),
    username:usernameSchema,
    desc:z.string()

})
