
import axios from "axios";
import { toast } from "react-toastify";
import { USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constant/userConstant";





export const userSignInAction = (user)=>async(dispatch) =>{
dispatch({type:USER_SIGNIN_REQUEST});
try {
    const {data} = await axios.post(`http://localhost:8000/signin`,user)
    localStorage.setItem("userInfo",JSON.stringify(data))
    dispatch({
        type:USER_SIGNIN_SUCCESS,
        payload:data
    });  
    toast.success("Login Successfully!")
} catch (error) {
    dispatch({
        type:USER_SIGNIN_FAIL,
        payload:error.response.data.error
    })
    toast.error(error.response.data.error)
}
}
// logout action
export const userLogOutAction = ( )=>async(dispatch) =>{
    dispatch({type:USER_LOGOUT_REQUEST});
    try {
        const {data} = await axios.get(`http://localhost:8000/logout`)
        localStorage.removeItem("userInfo")
        dispatch({
            type:USER_LOGOUT_SUCCESS,
            payload:data
        });  
        toast.success("Log Out Successfully!")
    } catch (error) {
        dispatch({
            type:USER_LOGOUT_FAIL   ,
            payload:error.response.data.error
        })
        toast.error(error.response.data.error)
    }
    }