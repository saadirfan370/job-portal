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
        mb:3,
        mt:3,
      }}
    >
    
      <CardContent>
        <Typography sx={{fontSize:15,color:palette.secondary.main,fontWeight:500}}>
          <IconButton><LocationOnIcon sx={{color:palette.secondary.main,fontSize:18}} />{location}</IconButton>
        </Typography>
        <Typography variant="h5" component="div">
        {jobTitle}
        </Typography>
        <Typography sx={{mb:1.5}} color="text.secondary">
        {category}
        </Typography>
        <Typography variant="body2">
        Description:{description.split(" ").slice(0,15).join(" ")+"..."}
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