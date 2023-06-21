import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  Hidden,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../../theme";
import { NAVBAR_HEIGHT, SIDEBAR_WIDTH } from "../../../utils/constants";
import CustomTypography from "../custom-typography";

const MainContent = () => {
  const Details = [
    {
      title: "Salary",
      value: "₹5,74,908",
      icon: "images/assets/job-details/Wallet.svg",
    },
    {
      title: "Opening",
      value: "22 Posts",
      icon: "images/assets/job-details/TwoFriends.svg",
    },
    {
      title: "Experience",
      value: "2+ Years",
      icon: "images/assets/job-details/Work.svg",
    },
    {
      title: "Location",
      value: "Remote, India",
      icon: "images/assets/job-details/Location.svg",
    },
  ];

  return (
    <Stack
      sx={{
        pt: `${NAVBAR_HEIGHT}px`,
        pl: { xs: 0, md: `${SIDEBAR_WIDTH}px` },
      }}
    >
      <Hidden smDown>
        <Typography
          variant="h6"
          sx={{ bgcolor: theme.palette.background.main, px: 3, py: 2 }}
        >
          Job Details
        </Typography>
      </Hidden>

      <Stack spacing={2} divider={<Divider />} sx={{ p: { xs: 2, sm: 3 } }}>
        <Box display="flex">
          <Avatar>B</Avatar>
          <Stack ml={2}>
            <CustomTypography fontSize={16} fontWeight={500}>
              Sr. Software enginner
            </CustomTypography>
            <Typography variant="caption">Volkswagon Ind. LTD</Typography>
          </Stack>
          <Chip
            label="Active"
            size="small"
            sx={{ bgcolor: "#E2F8D5", color: "green", ml: 3, px: 1 }}
          />
        </Box>

        <Grid container rowSpacing={1}>
          {Details.map((each) => (
            <Grid item xs={6} sm={4} md={3}>
              <Stack direction="row" spacing={{ xs: 1, sm: 2 }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ bgcolor: "#F3F3F3", width: 45, borderRadius: 1 }}
                >
                  <img src={each.icon} style={{ height: 20 }} />
                </Box>
                <Box>
                  <Typography variant="caption" color="grey">
                    {each.title}
                  </Typography>
                  <CustomTypography fontSize={16}>
                    {each.value}
                  </CustomTypography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box>
          <Typography variant="caption" color="grey">
            Description
          </Typography>
          <CustomTypography fontSize={16}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            est mattis integer neque vel ipsum.{" "}
          </CustomTypography>
        </Box>

        <Box>
          <Typography variant="caption" color="grey">
            Manpower type
          </Typography>
          <CustomTypography fontSize={16}>Direct recruitment</CustomTypography>
        </Box>

        <Box>
          <Typography variant="caption" color="grey">
            Applicants applied
          </Typography>
          <CustomTypography fontSize={16}>1230</CustomTypography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default MainContent;
