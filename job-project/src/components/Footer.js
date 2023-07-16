import { Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";

const Footer = () => {
  const { palette } = useTheme();
  return (
    <>
      <Box sx={{
        height:"70px",
        bgcolor:palette.secondary.midNightBlue,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Box component="span" sx={{color:"white"}}>All right reserved!  &#169;2023</Box>
      </Box>
    </>
  );
};

export default Footer;
