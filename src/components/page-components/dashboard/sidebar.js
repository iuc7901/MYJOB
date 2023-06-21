import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { SIDEBAR_WIDTH } from "../../../utils/constants";

const SideBar = () => {
  return (
    <Box height="100vh" position="fixed" sx={{ left: 0, top: 0, zIndex: 1000 }}>
      <Avatar
        variant="square"
        src="/images/assets/dashboard/Profile.svg"
        sx={{ height: "100%", width: SIDEBAR_WIDTH }}
      />
      {/* <img src="/images/assets/dashboard/Profile.svg" height={"100%"} /> */}
      <Stack position="absolute" top={20} left={20} color="white">
        {/* <img src="/images/assets/dashboard/logo-horizontal.svg" height={25} /> */}
        <Box display="flex" alignItems="center">
          <img src="/images/assets/dashboard/MYJOB-SQUARE.svg" />
          <img
            src="/images/assets/dashboard/MYJOB-TEXT.svg"
            style={{ marginLeft: 10 }}
          />
        </Box>
        <Box display="flex" alignItems="center" pt={3}>
          <Typography fontWeight={300}>Good Morning</Typography>
          <img
            src="/images/assets/dashboard/hello.svg"
            style={{ marginLeft: 10, height: 20 }}
          />
        </Box>
        <Typography variant="h6">Volkswagon India</Typography>

        <Stack spacing={2} pt={10}>
          <Typography variant="caption">Download our app from</Typography>
          <img
            src="/images/assets/dashboard/app-store.svg"
            height={50}
            width={150}
          />
          <img
            src="/images/assets/dashboard/play-store.svg"
            height={50}
            width={170}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
