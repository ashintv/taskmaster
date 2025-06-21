import { z } from 'zod'
import { string } from 'zod/v4'
import { usernameSchema } from './util'

export const CreateEmpolyeeZSchema= z.object({
        email:z.string().email('Invalid email'),
        name:z.string().min(4 , 'Name must be at least 4 characters'),
        designation:z.string(),
        dept: z.string()

})