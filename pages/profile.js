import { Hidden } from "@mui/material";
import React from "react";
import SideBar from "../src/components/page-components/dashboard/sidebar";
import Main from "../src/components/page-components/profile/main";

const Profile = () => {
  return (
    <>
      <Hidden mdDown>
        <SideBar />
      </Hidden>

      <Main />
    </>
  );
};

Profile.title = "Profile";
Profile.showTopBar = true;
export default Profile;
