import { Avatar, Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LockClockOutlined from "@mui/icons-material/LockClockOutlined";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch,useSelector } from "react-redux";
import { userSignInAction } from "../redux/action/userAction";
import { json, useNavigate } from "react-router-dom";


const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

const Login = () => {

    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:validationSchema,
        onSubmit:(values,actions) => {
            alert(json.stringify(values,null,2))
            actions.resetForm();
        }
    })



  return (
    <div>
        <Navbar />
      <Box
        sx={{
          height: "77vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          onSubmit={formik.handleSubmit}
          component="form"
          className="form_style border-style"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
              <LockClockOutlined />
            </Avatar>

            <TextField sx={{mb:3}}
              fullWidth
              id="email"
              name="email"
              label="E-mail"
              InputLabelProps={{
                shrink:true,
              }}
              placeholder = "E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              InputLabelProps={{
                shrink:true,
              }}
              placeholder = "Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Log In
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Login;
