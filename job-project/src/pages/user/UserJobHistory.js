import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import CardElement from '../../components/CardElement'

const UserJobHistory = () => {
  const { user } = useSelector(state => state.userProfile)
  // console.log(user,"sad");


  return (
    <div>
      <Box>
        <Typography variant="h4" sx={{ color: "#fafafa" }}>
          User JobHistory
        </Typography>
        <Box >
          {
            user && user.jobsHistory.map((history,i) =>(
              <CardElement
              key={i}
                id={history._id}
                jobTitle={history.title}
                description={history.description}
                category=''
                location={history.location}
              />
            ))
          }
        </Box>
      </Box>
    </div>
  );
};

export default UserJobHistory;
