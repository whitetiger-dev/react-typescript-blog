import User from '../model/User'
import {Request, Response} from 'express'


// get all admin users
export const getAllUser = async (req:Request, res:Response) => {
    let users;

    try {
        users = await User.find()
    } catch (error) {
        console.log(error)
    }

    if(!users) res.status(404).json({ message:"No users found"})
    
    return res.status(200).json({users})
}

// sign up a new user
export const signUp = async (req:Request, res:Response) => {
    res.setHeader('X-Foo', 'bar') // (attention!) Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client 
    const {username, password} = req.body

    // check if the user already exists
    let existingUser
    try {
        existingUser = await User.findOne({ username})
    } catch (error) {
        console.log(error)
    }
    if(existingUser) res.status(400).json({message: "User already exists"})

    // if no existing user, create a new
    const user = new User({username, password})
    try {
        await user.save()
    } catch (error) {
        console.log(error)
    }

    return res.status(201).json({user})
}