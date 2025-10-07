import jwtProvider from "../config/jwtProvider.js"
import cartService from "../services/cart.service.js"
import userService from "../services/user.service.js"
import bcrypt from 'bcrypt'
const register = async (req, res) => {
    try {

        const user = await userService.createUser(req.body)
        const jwt = jwtProvider.generateToken(user._id);

        // await cartService.createCart(user)

        return res.status(200).send({ jwt, message: "User Registered Successfully" });


    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { password, email } = req.body;

        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({
                message: `User nout found with email ${email}`,
            })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid Password"
            })
        }
        
        const jwt = jwtProvider.generateToken(user._id)
        
        return res.status(200).json({
            jwt,
            message: "Login Successfully"
        })

    } catch (error) {
        console.error("Login error:", error.message);
        return res.status(500).json({ error: error.message });
    }

}

export default {
    register,
    login
}