import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import image1 from "../images/resizing.jpg";
import SearchInput from "./searchInput";

const Header = () => {
  const StylesHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    minHeight: "400px",
    backgroundImage: `url(${image1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: theme.palette.secondary.main,
  }));
  return (
    <>
      <StylesHeader>
        <SearchInput />
      </StylesHeader>
    </>
  );
};

export default Header;
        