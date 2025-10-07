import jwtProvider from "../config/jwtProvider.js";
import userService from "../services/user.service.js";

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(404).send({ error: "user authentication failed." })
        }

        const userId = jwtProvider.getUserIdFromToken(token);
        const user = userService.findUserById(userId)
        req.user = user
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }

    next()
}

export default authenticate