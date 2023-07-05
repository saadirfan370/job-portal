const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const jobTypeSchema = new mongoose.Schema(
  {
    jobTypeName: {
      type: String,
      trim: true,
      required: [true, "Job Category is required"],
      maxlength: 70,
    },
    user: {
      type: ObjectId,
      ref:"User",
      required:true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("jobType", jobTypeSchema);
