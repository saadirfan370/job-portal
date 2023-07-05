const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const {
  createJob,
  singleJob,
  updateJob,
  showJob,
} = require("../controller/jobController");
const { isAssetError } = require("next/dist/client/route-loader");

const router = express.Router();

router.post("/job/create", isAuthenticated, isAdmin, createJob);

router.get("/job/:id", singleJob);

router.put("/job/update/:job_id", isAuthenticated, isAdmin, updateJob);

router.get("/jobs/show", showJob);
 

module.exports = router;
