import { Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Hidden,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";
import { useEffect } from "react";
import { NAVBAR_HEIGHT, SIDEBAR_WIDTH } from "../../../utils/constants";

const TopBar = ({ pageTitle }) => {
  return (
    <Box
      sx={{
        height: NAVBAR_HEIGHT,
        width: "100%",
        bgcolor: { xs: "white", sm: "#F4F4F4" },
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
        pl: { sm: 0, md: `${SIDEBAR_WIDTH}px` },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={{ xs: 2, sm: 3 }}
        height="100%"
        width="100%"
      >
        <Hidden smDown>
          <Box
            display="flex"
            justifyContent="space-between"
            bgcolor="white"
            borderRadius={2}
          >
            <Box display="flex" alignItems="center">
              <Search sx={{ color: "#C6C6C6", mx: 1 }} />
              <InputBase placeholder="Search" />
            </Box>

            <Button
              disableElevation
              variant="contained"
              size="large"
              color="secondary"
              sx={{
                color: "white",
                textTransform: "capitalize",
                fontWeight: 300,
                borderRadius: "0px 5px 5px 0px",
              }}
            >
              Search
            </Button>
          </Box>
        </Hidden>

        <Hidden smUp>
          <Typography variant="h6">{pageTitle}</Typography>
        </Hidden>

        <Stack spacing={2} direction="row" alignItems="center">
          <Hidden smDown>
            <Button sx={{ color: "#130F26", textTransform: "capitalize" }}>
              Explore
            </Button>
          </Hidden>

          <img src="/images/assets/dashboard/notification.svg" height={15} />
          <Box display="flex" alignItems="center">
            <Avatar>B</Avatar>
            <Hidden smDown>
              <Box
                sx={{
                  background: "#DADADA",
                  borderRadius: 1,
                  ml: "-10px",
                  px: 2,
                  py: 0.5,
                }}
              >
                <Typography>Bijay Ranjan</Typography>
              </Box>
            </Hidden>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TopBar;
