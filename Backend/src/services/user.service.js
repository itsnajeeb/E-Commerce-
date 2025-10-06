import jwtProvider from "../config/jwtProvider.js";
import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
const createUser = async (userData) => {
    try {
        const { firstName, lastName, email, password } = userData

        const existEmail = await User.find({ email });
        if (existEmail) {
            throw new Error("User already exist with email ", email)
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const createUser = await create({
            firstName,
            lastName,
            email,
            password: hashPassword
        })
        console.log("User Created Successfllyu", createUser);


        return createUser
    } catch (error) {
        throw new Error("User Creation Failed ", error.message)
    }
}

const findUserById = async (userId) => {
    try {
        const user = await User.findUserById(userId).populate('address')
        if (!user) {
            console.log("User not found");
        }
        return user
    }
    catch (error) {
        throw new Error("User Not Find ", error.message)
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email })
        if (!user) {
            console.log("User email not found", email);
        }
        return user
    }
    catch (error) {
        throw new Error("User Not Find ", error.message)
    }
}

const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token)

        const user = await findUserById(userId)

        if (!user) {
            throw new Error("User not found ")
        }
        return user

    }
    catch (error) {
        throw new Error("User Not Find ", error.message)
    }
}

const getAllUser = async () => {
    try {
        const users = await User.find();
        return users
    } catch (error) {
        throw new Error("User Not Find ", error.message)

    }
}

export default {
    createUser,
    findUserById,
    getUserByEmail,
    getUserProfileByToken,
    getAllUser
}