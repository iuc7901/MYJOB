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
import { SIDEBAR_WIDTH } from "../../../utils/constants";

const ProfileTopBar = () => {
  return (
    <Box
      sx={{
        height: 200,
        width: "100%",
        bgcolor: "#F4F4F4",
      }}
    >
      <Stack direction="row" justifyContent="space-between" p={3} width="100%">
        <Box
          bgcolor="#DADADA"
          borderRadius={2}
          display="flex"
          alignItems="center"
          px={2}
        >
          <Typography fontWeight={500} sx={{ fontSize: { xs: 14, sm: 16 } }}>
            Download App
          </Typography>
        </Box>

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

export default ProfileTopBar;
