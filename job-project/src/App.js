import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Login from './pages/Login';
import Userdashboard from './pages/user/UserDashboardEl';
import UserRoute from './components/UserRoute';
import AdminRoute from './components/AdminRoute';
import Layout from './pages/global/Layout';
import UserJobHistory from './pages/user/UserJobHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import SingleJob from './pages/SingleJob';
import DashUsers from './pages/admin/DashUsers';
import Dashjobs from './pages/admin/Dashjobs';

//HOC  high order component
const UserdashboardHOC = Layout(Userdashboard)
const UserJobHistoryHOC = Layout(UserJobHistory);
const UserInfoHistoryHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers);
const DashjobsHOC = Layout(Dashjobs);




const App = () => {
  return (
    <>
    <ToastContainer /> 
    <ThemeProvider  theme={theme}>
      <CssBaseline />
      <ProSidebarProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/location/:location' element={<Home />} />
        <Route path='/search/:keyword' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/job/:id' element={<SingleJob />} />
        <Route path='/admin/dashboard' element={<AdminRoute ><AdminDashboardHOC /></AdminRoute>} />
        <Route path='/admin/users' element={<AdminRoute ><DashUsersHOC /></AdminRoute>} />
        <Route path='/admin/jobs' element={<AdminRoute ><DashjobsHOC /></AdminRoute>} />
        <Route path='/user/dashboard' element={<UserRoute><UserdashboardHOC /></UserRoute>} />
        <Route path='/user/job' element={<UserRoute><UserJobHistoryHOC /></UserRoute>} />
        <Route path='/user/info' element={<UserRoute><UserInfoHistoryHOC /></UserRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
      </ProSidebarProvider>
    </ThemeProvider>
    </>
  )
}

export default App
