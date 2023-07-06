import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import {
  Box,
  Card,
  Stack,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from "../redux/action/jobAction";
import { useParams } from "react-router-dom";
import CardElement from "../components/CardElement";
import Pagination from '@mui/material/Pagination';
import Footer from "../components/Footer";
import LoadingBox from "../components/LoadingBox";

const Home = () => {
  const { jobs, SetUniqueLocation, pages, loading } = useSelector(
    (state) => state.loadJobs
  );
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { keyword, location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState("");

  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);

  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
        <Navbar />
        <Header />
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box sx={{ flex: 2, p: 2 }}>
              <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component="h4"
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}
                  >
                    Filter job by category
                  </Typography>
                </Box>
              </Card>
            </Box>
            <Box sx={{ flex: 2, p: 2 }}>
              {
              loading ? 
              <LoadingBox />:
              jobs && jobs.length === 0 ? 
              <>
              <Box sx={{
                minHeight:"350px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
              }}
              >
                <h2>No result found!</h2>
              </Box>
              </>:
              
              jobs && jobs.map((job,i) => (
                <CardElement 
                key={i}
                id={job._id}
                jobTitle={job.title}
                description={job.description}
                category={job.jobType ? job.jobType.jobTypeName : "No category"}
                location={job.location}
                />
              ))}
              <Stack spacing={2}>
              <Pagination page={page} count={page === 0 ? 1: pages} onChange={(event,value)=>setPage(value)} />
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  ); 
};

export default Home;
