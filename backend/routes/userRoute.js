const express = require("express");
const router = express.Router();
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const { allUsers, singleUser, editUser, deleteUser, createUserJobsHistory } = require("../controller/userController");

// user route
router.get('/allUsers',isAuthenticated ,isAdmin, allUsers);

// singleUser route
router.get('/user/:id',isAuthenticated , singleUser);

// Edit user route
router.put('/user/edit/:id',isAuthenticated , editUser);

// delete user route
router.delete('/admin/user/delete/:id',isAuthenticated ,isAdmin, deleteUser);

// delete user route
router.post('/user/jobHistory',isAuthenticated , createUserJobsHistory);



module.exports  = router;