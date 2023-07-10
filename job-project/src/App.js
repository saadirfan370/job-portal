import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';



const App = () => {
  return (
    <>
    <ToastContainer /> 
    <ThemeProvider  theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/location/:location' element={<Home />} />
        <Route path='/search/:keyword' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
