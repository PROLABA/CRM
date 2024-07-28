import {verify} from "jsonwebtoken";
import {body} from 'express-validator'
export const protectAuth = async(req, res, next)=>{
    let token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
    if(token){
        try{
            const decoded = verify(token, process.env.ACCESS_TOKEN)
            req.userID = decoded.userId
            next()
        }catch (err){
            res.status(403).json({
                message: 'Access is closed'
            })
        }
    }else{
        return res.status(403).json({
            message: 'Token is missing'
        })
    }
}

export const validatorRegister = [
    body('email', 'Incorrect email format').isEmail({}),
    body('password', 'The minimum password length is 4').isLength({min:4}),
]