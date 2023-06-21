import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { LocationOn, BusinessCenter, Work } from "@mui/icons-material/";
import CustomTypography from "../custom-typography";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { LoadJobsURL } from "../../../api/api-route";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
//import JobTabs from "./job-tabs";

const JobCard = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const LoadJobs = () => {
    setLoading(true);
    axios
      .get(LoadJobsURL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("test-token")}`,
        },
      })
      .then((response) => {
        const { data } = response?.data;
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        const data = error?.response?.data;
        enqueueSnackbar(data?.message || "Something went wrong", {
          variant: "error",
          anchorOrigin: {
            horizontal: "center",
            vertical: "bottom",
          },
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    LoadJobs();
  }, []);

  // const card = [
  //   {
  //     title: "Sr. Software enginner",
  //     subtitle: "Volkswagon Ind. LTD",
  //     avatar: "/images/assets/dashboard/card-avatar.svg",
  //     location: "Remote, India",
  //     package: "₹ 5,72,000 - 10,72,000 Yearly",
  //     experience: "2+ years Experience in Enginnering/web development",
  //   },
  //   {
  //     title: "Sr. Software enginner",
  //     subtitle: "Volkswagon Ind. LTD",
  //     avatar: "/images/assets/dashboard/card-avatar.svg",
  //     location: "Remote, India",
  //     package: "₹ 5,72,000 - 10,72,000 Yearly",
  //     experience: "2+ years Experience in Enginnering/web development",
  //   },
  //   {
  //     title: "Sr. Software enginner",
  //     subtitle: "Volkswagon Ind. LTD",
  //     avatar: "/images/assets/dashboard/card-avatar.svg",
  //     location: "Remote, India",
  //     package: "₹ 5,72,000 - 10,72,000 Yearly",
  //     experience: "2+ years Experience in Enginnering/web development",
  //   },
  //   {
  //     title: "Sr. Software enginner",
  //     subtitle: "Volkswagon Ind. LTD",
  //     avatar: "/images/assets/dashboard/card-avatar.svg",
  //     location: "Remote, India",
  //     package: "₹ 5,72,000 - 10,72,000 Yearly",
  //     experience: "2+ years Experience in Enginnering/web development",
  //   },
  //   {
  //     title: "Sr. Software enginner",
  //     subtitle: "Volkswagon Ind. LTD",
  //     avatar: "/images/assets/dashboard/card-avatar.svg",
  //     location: "Remote, India",
  //     package: "₹ 5,72,000 - 10,72,000 Yearly",
  //     experience: "2+ years Experience in Enginnering/web development",
  //   },
  // ];

  return (
    <>
      {/* <JobTabs /> */}
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="90vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Paper square sx={{ p: { xs: 1, sm: 2 } }}>
          <Stack spacing={2}>
            {data && data.length > 0 ? (
              data.map((each) => (
                <Paper
                  variant="outlined"
                  sx={{ p: { xs: 1, sm: 2 }, borderRadius: 3 }}
                >
                  <Box display="flex" alignItems="center">
                    <Avatar src={each.avatar} />
                    <Stack ml={2}>
                      <Typography fontWeight={500}>{each.title}</Typography>
                      <Typography variant="caption">
                        {each.description}
                      </Typography>
                    </Stack>
                  </Box>

                  <Stack spacing={1} pt={1} color="#CBCBCB">
                    <Box display="flex">
                      <LocationOn />
                      <CustomTypography
                        fontSize={18}
                        color={"black"}
                        sx={{ ml: 1 }}
                      >
                        {each.workLocation}
                      </CustomTypography>
                    </Box>
                    <Box display="flex">
                      <Work />
                      <CustomTypography
                        fontSize={18}
                        color={"black"}
                        sx={{ ml: 1 }}
                      >
                        {`${each.salary} Yearly`}
                      </CustomTypography>
                    </Box>
                    <Box display="flex">
                      <BusinessCenter />
                      <CustomTypography
                        fontSize={18}
                        color={"black"}
                        sx={{ ml: 1 }}
                      >
                        {each.experience}
                      </CustomTypography>
                    </Box>
                  </Stack>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap={"wrap"}
                    pt={2}
                  >
                    <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
                      <Chip
                        label={`${each.noOfEmployees} Opening`}
                        size="small"
                        sx={{
                          color: "#1F61B4",
                          bgcolor: "#DFF0FF",
                          fontSize: { xs: 12, sm: 14, lg: 16 },
                        }}
                      />
                      <Chip
                        label={each.type}
                        size="small"
                        sx={{ fontSize: { xs: 12, sm: 14, lg: 16 } }}
                      />
                    </Stack>
                    <CustomTypography fontSize={16}>4d ago</CustomTypography>
                  </Box>
                </Paper>
              ))
            ) : (
              <>No Jobs Found</>
            )}
          </Stack>
        </Paper>
      )}
    </>
  );
};

export default JobCard;
