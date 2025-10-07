import jwtProvider from "../config/jwtProvider.js";
import User from "../models/user.model.js";
import bcrypt from 'bcrypt'


const createUser = async (userData) => {
    try {
        const { firstName, lastName, email, password } = userData;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error(`User already exists with email: ${email}`);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        return newUser;

    } catch (error) {
        throw new Error(`User creation failed: ${error.message}`);
    }
};

const findUserById = async (userId) => {
    try {
        console.log("USER ID ", userId);
        
        const user = await User.findById(userId)
        // .populate('address');


        if (!user) {
            console.log("User not found");
        }
        return user
    }
    catch (error) {
        throw new Error(`User Not Find ${error.message}`)
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
        throw new Error(`User Not Found ${error.message}`,)
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