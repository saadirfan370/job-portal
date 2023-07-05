const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  if (err.name === "CastError") {
    const message = `Ressourse not found ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  
  //mongoose dublicate value
  if (err.code === 11000) {
    const message = `Dublicate field value entered`;
    error = new ErrorResponse(message, 400);
  }

  //validation error
  if (err.name === "ValidationError" ) {
    const message = Object.values(err.errors).map(val => ' ' + val.message);
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success:false,
    error:error.message || "server error"
  })

};
module.exports = errorHandler;
