import {
  Box,
  Dialog,
  Fab,
  Grid,
  Hidden,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { NAVBAR_HEIGHT, SIDEBAR_WIDTH } from "../../../utils/constants";
import CloseIcon from "@mui/icons-material/Close";
import EmployeeReq from "./employee-req";
import JobCard from "./job-card";
import JobTabs from "./job-tabs";

const MainContent = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Stack
      sx={{
        px: { xs: 1, sm: 3 },
        pt: `${NAVBAR_HEIGHT}px`,
        ml: { sm: 0, md: `${SIDEBAR_WIDTH}px` },
        mt: 2,
      }}
    >
      <Hidden mdUp>
        <Box display="flex" alignItems="flex-end" pb={2} px={{ xs: 2, sm: 0 }}>
          <Typography variant="h6">
            Hello, <br /> Bijay Ranjan
          </Typography>
          <img
            src="/images/assets/dashboard/hello.svg"
            style={{ margin: 5, height: 20 }}
          />
        </Box>
      </Hidden>

      <Hidden smDown>
        <img src="/images/assets/dashboard/discount.svg" />
      </Hidden>

      <Hidden smUp>
        <img src="/images/assets/dashboard/discount-mobile.svg" />
      </Hidden>

      <JobTabs />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <JobCard />
        </Grid>

        <Hidden smDown>
          <Grid item xs={12} md={6}>
            <EmployeeReq />
          </Grid>
        </Hidden>
      </Grid>

      <Hidden smUp>
        <Fab
          size="medium"
          onClick={handleClickOpen}
          sx={{
            bgcolor: "#F58431",
            position: "fixed",
            bottom: 10,
            right: 10,
          }}
        >
          <img src="/images/assets/dashboard/Work.svg" style={{ height: 20 }} />
        </Fab>
        <Dialog open={open} fullScreen>
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{
              position: "absolute",
              right: 5,
              top: 15,
            }}
          >
            <CloseIcon />
          </IconButton>
          <EmployeeReq />
        </Dialog>
      </Hidden>
    </Stack>
  );
};

export default MainContent;
