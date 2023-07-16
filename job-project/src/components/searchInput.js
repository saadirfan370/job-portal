import React from "react";
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Box , Button, InputBase} from '@mui/material';
import { useNavigate } from "react-router-dom";


const validationSchema = yup.object({
    search:yup.string("Enter your search query").required("this field can not be empty")
})

const SearchInput = () => {
    const navigate = useNavigate();

    const onSubmit = ( values,action) =>{
        const {search} = values;
        if(search.trim()){
            navigate(`/search/${search}`)
        }else{
            navigate('/');
        }
        action.resetForm();
    }

    const {values,errors,touched,handleBlur,handleChange,handleSubmit,isSubmitting} = useFormik({
        initialValues:{
            search:"",
        },
        validationSchema:validationSchema,
        onSubmit
    })

  return (
    <form onSubmit={handleSubmit} style={{width:"50%"}}>
      <Box sx={{width:"100%",display:"flex",justifyContent:"center"}}>
        <InputBase sx={{bgcolor:"white",padding:"10px"}}
        style={{WebkitBorderTopLeftRadius:"30px",WebkitBorderBottomLeftRadius:"30px"}}
        fullWidth={true}
        id="search"
        name="search"
        label="search"
        placeholder="ex: developer , front end"
        value={values.search}
        onChange={handleChange}
        error={touched.search && Boolean(errors.search)}
        />
        <Button color="primary" variant="contained" type="submit" disabled={isSubmitting} style={{width:"20%",borderRadius:0,borderTopRightRadius:"30px",borderBottomRightRadius:"30px"}}>
            Search
        </Button>
      </Box>
      <Box component='span' sx={{color:"orange"}}>{touched.search && errors.search}</Box>
    </form>
  )
}

export default SearchInput
