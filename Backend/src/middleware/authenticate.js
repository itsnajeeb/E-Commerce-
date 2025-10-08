import jwtProvider from "../config/jwtProvider.js";
import userService from "../services/user.service.js";

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];


    if (!token) {
      return res.status(401).send({ error: "User authentication failed. Token missing." });
    }

    //  Get user ID from token
    const userId = jwtProvider.getUserIdFromToken(token);

    // Wait for user lookup
    const user = await userService.findUserById(userId);

    if (!user) {
      return res.status(404).send({ error: "User not found." });
    }

    //  Attach user to request
    req.user = user;

    //  Move next() here, after successful auth
    next();

  } catch (error) {
    console.error("Authentication Error:", error);
    return res.status(401).send({ error: "Invalid or expired token." });
  }
};

export default authenticate;
