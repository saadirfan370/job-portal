import * as React from 'react';
// import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import AddIcon from "@mui/icons-material/Add";




const  CardElement = ({jobTitle,description,category,location ,id}) => {
    const {palette} = useTheme();
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 275,
        mb:1,
        mt:1,
      }}
    >
    
      <CardContent>
        <Typography variant="h5" component="div" style={{textTransform:"uppercase",fontFamily:"monospace"}}>
        {jobTitle}
        </Typography>
        <Typography sx={{fontSize:"15px",color:palette.secondary.main,fontWeight:500 }}>
          <IconButton style={{paddingLeft:0,fontSize:"15px",textTransform:"capitalize",fontFamily:"monospace"}}><LocationOnIcon sx={{color:palette.secondary.main,mr:1,fontSize:"15px"}} />{location}</IconButton>
        </Typography>
        <Typography sx={{mb:1.5}} color="text.secondary" style={{fontFamily:"monospace",textTransform:"capitalize"}}>
        {category}
        </Typography>
        <Typography variant="body2">
        Description: {description.split(" ").slice(0,15).join(" ")+"..."}
        </Typography>
      </CardContent>
      <CardActions >
        <Button disableElevation variant="contained" size="small" startIcon={<AddIcon />}>
          <Link style={{textDecoration:"none",color:"white",boxShadow:0}} to={`/job/${id}`}>More Details</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
export default CardElement;