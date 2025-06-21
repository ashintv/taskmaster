import { z } from 'zod'
import { string } from 'zod/v4'
import { usernameSchema } from './util'



export const CreateMeetingZSchema = z.object({
        name:z.string().min(4 , 'Name must be at least 4 characters' ),
        type:z.enum(['dept' , 'org' , 'bord' , 'custom']),
        lead:usernameSchema,
        participants:z.array(usernameSchema),
        // task:z.array(usernameSchema)
})


