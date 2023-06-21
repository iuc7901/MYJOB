import { Box, Grid } from "@mui/material";
import React from "react";
import { NAVBAR_HEIGHT, SIDEBAR_WIDTH } from "../../../utils/constants";
import OrganizationDetails from "./organization-details";
//import ProfileTopBar from "./profile-topbar";
import UploadCerti from "./upload-certi";
import UserInfo from "./user-info";

const Main = () => {
  return (
    <Box sx={{ pl: { md: `${SIDEBAR_WIDTH}px` }, pt: `${NAVBAR_HEIGHT}px` }}>
      {/* <ProfileTopBar /> */}
      <UserInfo />
      <Grid container spacing={3} px={{ xs: 2, sm: 3 }} py={3}>
        <Grid item xs={12} md={6}>
          <OrganizationDetails />
        </Grid>
        <Grid item xs={12} md={6}>
          <UploadCerti />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
