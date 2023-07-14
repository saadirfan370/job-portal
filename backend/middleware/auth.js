const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel1");

exports.isAuthenticated = async (req, res, next) => {
    // const { token }  = req.cookies;
    
    let token;
    const token1 = req.cookies.token;
    const token2 = req.headers.cookies;
    if(token1){
        token = token1
    }else if(token2){
        token = token2
    }
    // console.log(token);
    //make sure token exists

    if(!token){
        return next(new ErrorResponse('not authorized to access this route' , 401))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        return next(new ErrorResponse("not authorized to access this route",401))
    }
};


// middleware for admin

exports.isAdmin = (req,res,next) =>{
    if (req.user.role === 0) {
        return next (new ErrorResponse("Access denied , you must an admin",401))
    }
    next()
}