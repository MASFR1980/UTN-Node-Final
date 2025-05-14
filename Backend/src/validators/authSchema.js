import {z} from 'zod';

const authSchema = z.object({
    username: z.string().min(3, { message: "El nombre de ususario debe tener al menos 3 caracteres" }).max(20, { message: "El nombre de ususario no puede tener más de 20 caracteres" }),
    password: z.string().min(6, { message: "El password debe tener al menos 6 caracteres" })})
    
export {authSchema}
