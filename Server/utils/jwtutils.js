import jwt from 'jsonwebtoken';
import secretKey from '../jwtconfig.js';

const generateToken = (user) =>{
    const payload = {
        id:user._id,
        email:user.email,
    }

    return jwt.sign(payload, secretKey, {expiresIn: '12h'});
}
export default generateToken;