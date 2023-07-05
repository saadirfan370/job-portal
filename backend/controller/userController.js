const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/userModel1");

exports.allUsers = async (req, res, next) => {
  //enable pagination
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const count = await User.find({}).estimatedDocumentCount();

  try {
    const users = await User.find()
      .sort({ caretedAt: -1 })
      .select("-password")
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    res.status(200).json({
      success: true,
      users,
      page,
      pages: Math.ceil(count / pageSize),
      count,
    });
    next();
  } catch (error) {
    return next(error);
  }
};

exports.singleUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      success: true,
      user,
    });
    next();
  } catch (error) {
    return next(error);
  }
};

//edit user
exports.editUser = async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      user,
    });
    next();
  } catch (error) {
    return next(error);
  }
};

// deleteUser
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      message: "User deleted",
    });
    next();
  } catch (error) {
    return next(error);
  }
};

// jobs History
exports.createUserJobsHistory = async (req, res, next) => {
  const { title, description, salary, location } = req.body;
  try {
    const currentuser = await User.findOne({_id:req.user._id});
    if(!currentuser){
      return next(new ErrorResponse("You must Log In", 401));
    }else{
      const addJobHistory = {
        title,
        description,
        salary,
        location,
        user:req.user._id
      }
      currentuser.jobsHistory.push(addJobHistory)
      await currentuser.save();
    }


    res.status(200).json({
      success: true,
      currentuser
    });
    next();
  } catch (error) {
    return next(error);
  }
};
