import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';



const App = () => {
  return (
    <>
    <ThemeProvider  theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
