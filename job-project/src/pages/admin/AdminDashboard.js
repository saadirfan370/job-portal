import { Box, Stack, Typography } from "@mui/material";
import StatComponents from "../../components/StatComponents";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import CategoryIcon from "@mui/icons-material/Category";
import { Chart } from "react-google-charts";
import { data,options } from "./data/data";
import ChartComponents from "../../components/ChartComponents";


const AdminDashboard = () => {
  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
          Dashboard
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <StatComponents
            value="45621"
            icon={
              <SupervisorAccountIcon
                sx={{ color: "#fafafa", fontSize: "30px" }}
              />
            }
            description="Administrator"
            money=""
          />
          <StatComponents
            value="450"
            icon={<WorkIcon sx={{ color: "#fafafa", fontSize: "30px" }} />}
            description="Jobs"
            money=""
          />
          <StatComponents
            value="6548"
            icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: "30px" }} />}
            description="Job Categories"
            money=""
          />
        </Stack>

        <Stack direction={{xs:"column",sm:"row"}} sx={{mt:3}} spacing={{xs:1,sm:2,md:4}}>
            <ChartComponents >
              <Chart 
              chartType="Bar"
              data={data}
              options={options}
              width="100%"
              height='300px'
              legendToggle
              />
            </ChartComponents>
        </Stack>
      </Box>
    </>
  );
};

export default AdminDashboard;
