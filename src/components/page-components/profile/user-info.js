import {
  Avatar,
  Badge,
  Box,
  CircularProgress,
  Hidden,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../../theme";
import { SIDEBAR_WIDTH } from "../../../utils/constants";
import CustomTypography from "../custom-typography";

const UserInfo = () => {
  return (
    <>
      <Hidden smDown>
        <Typography
          variant="h6"
          fontWeight={500}
          mb={2}
          sx={{ bgcolor: theme.palette.background.main, px: 3, pb: 8 }}
        >
          Profile
        </Typography>
      </Hidden>
      <Stack px={4}>
        <Stack spacing={2} direction="row" alignItems="flex-end">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Avatar
                src="/images/assets/profile/gallery.svg"
                sx={{
                  height: 35,
                  width: 35,
                  background: "#C6E3FE",
                  p: 1,
                }}
              />
            }
          >
            <Avatar
              src="/images/assets/dashboard/card-avatar.svg"
              sx={{
                height: { xs: 80, sm: 120 },
                width: { xs: 80, sm: 120 },
                mt: { xs: 0, sm: "-70px" },
              }}
            />
          </Badge>
          <Box>
            <CustomTypography fontSize={18} fontWeight={500}>
              Volkswagon India
            </CustomTypography>
            <Box display="flex" alignItems="center">
              <CircularProgress
                variant="determinate"
                value={82}
                size={15}
                thickness={5}
              />
              <CustomTypography fontSize={16} sx={{ ml: 1 }}>
                Profile 82% complete
              </CustomTypography>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default UserInfo;
