import { User } from "../models/authModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { authSchema } from "../validators/authSchema.js"

export const register = async(req,res) => {
    try {
        const {username, password} = req.body
        const validation = authSchema.safeParse(req.body)
        if (!validation.success) {
            return res.status(400).json({error: validation.error.issues})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({username, password: hashedPassword})
        await newUser.save()
        res.status(201).json({message: "Usuario creado exitosamente", user: {username: newUser.username}})
    }
    catch (error) {
        res.status(400).json({error: "el usuario ya existe"})      
    }
}

export const login = async(req,res) => {
    const {username, password} = req.body
    const validation = authSchema.safeParse({username, password} )
    if (!validation.success) {
        return res.status(400).json({error: validation.error.issues})
    }
    try {
        
        const user = await User.findOne({username})
        if (!user) {
            return res.status(401).json({error: "Error - Credenciales incorrectas"})
        }   

        
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({error: "Error - Credenciales incorrectas"})
        }   
        const JWT_SECRET = process.env.JWT_SECRET
        const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn: "1h"})
          
        res.json({token})
    }
    catch (error) {
        res.status(500).json({error: error.message})
    }
}
