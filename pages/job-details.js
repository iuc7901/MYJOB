import { Hidden } from "@mui/material";
import React from "react";
import SideBar from "../src/components/page-components/dashboard/sidebar";
import MainContent from "../src/components/page-components/jobDetails/main-content";

const JobDetails = () => {
  return (
    <>
      <Hidden mdDown>
        <SideBar />
      </Hidden>
      <MainContent />
    </>
  );
};

JobDetails.title = "Job Details";
export default JobDetails;
