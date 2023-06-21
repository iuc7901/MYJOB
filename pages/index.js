import { Box, Grid, Hidden } from "@mui/material";
import React from "react";
import MainContent from "../src/components/page-components/dashboard/main-content";
import SideBar from "../src/components/page-components/dashboard/sidebar";
import TopBar from "../src/components/page-components/dashboard/topbar";

const Dashboard = () => {
  return (
    <Grid container>
      <Hidden mdDown>
        <Grid item>
          <SideBar />
        </Grid>
      </Hidden>
      <Grid item xs={12}>
        <MainContent />
      </Grid>
    </Grid>
  );
};

Dashboard.title = "Dashboard";
Dashboard.showTopBar = true;
export default Dashboard;
