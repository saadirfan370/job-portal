import React from "react";
import {Card,CardContent,useTheme}  from '@mui/material';


const ChartComponents = ({children}) => {
    const {palette} = useTheme();
  return (
    <>
      <Card sx={{bgcolor:palette.secondary.midNightBlue,fontSize:"100%",width:"100%"}}>
        <CardContent>
            {children}
        </CardContent>
      </Card>
    </>
  )
}

export default ChartComponents
