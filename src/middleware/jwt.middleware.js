
import jwt from 'jsonwebtoken'

const jwtAuth =(req,res,next)=>{

    const token = req.headers['authorization'];// Get token from headers
    if(!token){
        res.status(401).send('unauthorized');  // If no token, respond with 401
    }
    
    try{
        const code = jwt.verify(token,'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz') // Verify token using secret key
        req.userId = code.UserId; // Attach user ID to request object

        next()
    }catch(err){
        res.status(401).send('unauthorized token');
    }

}

export default jwtAuth;

