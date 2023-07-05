const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const {
  createJobType,
  allJobsType,
  updateJobsType,
  deleteJobsType,
} = require("../controller/jobTypeController");
const router = express.Router();

router.post("/type/create", isAuthenticated,isAdmin, createJobType);

router.get("/type/allJobsType", allJobsType);

router.put("/type/update/:type_id", isAuthenticated, isAdmin, updateJobsType);

router.delete("/type/delete/:type_id", isAuthenticated, isAdmin, deleteJobsType);

module.exports = router; 
