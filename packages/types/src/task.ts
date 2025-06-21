import { z } from "zod";
import { usernameSchema } from "./util";

const taskZSchema = z.object({
    name: z.string(),
    owner: usernameSchema,
    assignee: z.array(usernameSchema),
    status: z.string(),
    level: z.enum(["root", "leaf", "branch"]),
});

/*     

root: no parent task  top most task
branch : intermediate task child task can be created 
leaf : lowest task no more child taskes

*/
