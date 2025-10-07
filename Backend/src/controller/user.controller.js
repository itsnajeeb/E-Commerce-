import userService from "../services/user.service.js";

const getUserProfile = async (req, res) => {
    try {
        const jwt = req.headers.authorization?.split(" ")[1];
        
        if (!jwt) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const user = await userService.getUserProfileByToken(jwt)
        console.log(user);
        

        return res.status(200).json({ user })

    } catch (error) {
        throw new Error(error.message)
    }
}

const getAllUser = async (req, res) => {
    try {
        const user = await userService.getAllUser();
        return res.status(200).json({ user })
    } catch (error) {
        throw new Error(error.message)
    }
}

export default {
    getUserProfile,
    getAllUser
}