import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadJobReducer, loadJobSingleReducer } from './reducers/jobReducer';
import { loadJobTypeReducer } from './reducers/jobTypeReducer';
import { useReducerLogout, useReducerSignIn, userApplyJobReducer, userReducerProfile } from './reducers/userReducers';

//combine reducers 
const reducer = combineReducers({
    loadJobs: loadJobReducer,
    jobTypeAll:loadJobTypeReducer,
    signIn:useReducerSignIn,
    logOut:useReducerLogout,
    userProfile:userReducerProfile,
    singleJob:loadJobSingleReducer,
    userJobApplication:userApplyJobReducer,
});


//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;