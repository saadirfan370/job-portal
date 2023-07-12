import React from "react";
import { Stack } from "@mui/system";
import { Box, Typography } from "@mui/material";
import StatComponents from "../../components/StatComponents";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import { useSelector,useDispatch } from "react-redux";
import moment from 'moment';

const Userdashboard = () => {
  const { user } = useSelector(state => state.userProfile)

  return (
    <Box>
      <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
        Dashboard
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <StatComponents
          value={user && moment(user.createdAt).format('YYYY/MM/DD')}
          icon={
            <CalendarMonthIcon sx={{ color: "#fafafa", fontSize: 30 }} />
          }
          description="Member since"
          money=""
        />
        <StatComponents
          value={user && user.jobsHistory.length}
          icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
          description="Number of jobs submitted"
          money=""
        />
      </Stack>
    </Box>
  );
};

export default Userdashboard;
