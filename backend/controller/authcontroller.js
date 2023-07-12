const user1 = require("../models/userModel1");
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res, next) => {
  if (req.body.firstName) {
    if (req.body.firstName == " ") {
      return res.status(401).send("firstName is empty");
    }
  } else {
    return res.status(401).send("firstName is required");
  }
  const { email } = req.body;
  const userExect = await user1.findOne({ email });
  if (userExect) {
    return next(new ErrorResponse("email already registred", 400));
  }
  try {
    const user = await user1.create(req.body);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("error12");
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return next(new ErrorResponse("please add an email", 403));
    }
    if (!password) {
      return next(new ErrorResponse("please add a password", 403));
    }
    const user = await user1.findOne({ email: email });
    console.log(user);
    if (!user) {
      return next(new ErrorResponse("invalid credentials", 403));
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        // Handle error
        return next(new ErrorResponse(err.message, 403));
      }

      if (!result) {
        // Passwords don't match
        return next(new ErrorResponse("invalid credentials", 403));
      }

      // Passwords match, user is authenticated
      sendTokenResponse(user, 200, res);
    });
  } catch (error) {
    next(error);
  }
};

const sendTokenResponse = async (user, codeStatus, res) => {
  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: 3600,
  });
  res
    .status(codeStatus)
    .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
    .json({ 
      success: true, token, user, role:user.role });
};

//---------------logout api-----------//

exports.logout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "logged out",
  });
};

// user profile

exports.userProfile = async (req, res, next) => {
  const user = await user1.findById(req.user.id).select("-password");

  res.status(200).json({
    success: true,
    user,
  });
};
