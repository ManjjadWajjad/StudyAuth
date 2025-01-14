const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    const token = req.header('Authorization')
    if(!token){
        return
        res.status(401).json({message: 'unauthorized'})

    }
    jwt.verify(token, process.env.SECRET_KEY, (eror, user) => {
        if(eror){
            return res.json({message: 'invalid token'})
        }
      
        next()
    })
}    
module.exports = auth