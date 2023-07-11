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
import Layout from './pages/global/Layout';

const UserdashboardHOC = Layout(Userdashboard)


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
        <Route path='/user/dashboard' element={<UserRoute><UserdashboardHOC /></UserRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
      </ProSidebarProvider>
    </ThemeProvider>
    </>
  )
}

export default App
