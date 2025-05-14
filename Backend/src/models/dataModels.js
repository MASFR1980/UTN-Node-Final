import {model, Schema } from "mongoose";

const dataSchema = Schema({
    name: {type: String, required: true, unique: true},
    CUIT: {type: String, required: true},
    category: {type: String, required: true},
    address: {type: String, required: true},    
    phone: {type: String, required: true},
    email: {type: String, required: true}
}
)
export const Data = model('Data', dataSchema)


