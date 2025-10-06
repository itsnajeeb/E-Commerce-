import jwt from 'jsonwebtoken'


const generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, { expiresIn: '48h' })
    return token
}

const getUserIdFromToken = (token) => {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    return decodeToken.userId
}

export default { generateToken, getUserIdFromToken }