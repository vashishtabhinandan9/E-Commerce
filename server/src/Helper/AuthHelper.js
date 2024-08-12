import jwt from 'jsonwebtoken';
const generateJwtToken = (id) => {
    return jwt.sign({
        id
    }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d'
    });
}

export { generateJwtToken };