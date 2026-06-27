import jwt from 'jsonwebtoken'
const adminValidate = async (req,res,next)=>{
    let token = req.cookies.token;
    if(token){

        let userDetails = jwt.verify(token,process.env.jsonToken);
        if(userDetails.role == 'admin'){
            next()
        }else{
            res.status(403).json({message:"does not have access rights"})
        }
    }else{
        res.status(401).json({message:"Authentication required"})
    }

}
const clientValidate = async (req,res,next)=>{
    let token = req.cookies.token;
    if(token){

        let userDetails = jwt.verify(token,process.env.jsonToken);
        if(userDetails.role == 'client'){
            next()
        }else{
            res.status(403).json({message:"does not have access rights"})
        }
    }else{
        res.status(401).json({message:"Authentication required"})
    }

}

export {
    adminValidate,clientValidate
} 