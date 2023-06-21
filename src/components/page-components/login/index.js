import { Avatar, Box, Grid, Hidden, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import { useSnackbar } from "notistack";
import { PhoneLoginURL } from "../../../api/api-route";
import LoginNow from "./login-now";
import SignUp from "./sign-up";
import EnterOtp from "./enter-otp";

const Login = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { enqueueSnackbar } = useSnackbar();

  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(0);

  const LoginAPICALL = () => {
    axios
      .post(PhoneLoginURL, {
        action: "authentication",
        phone: phone,
      })
      .then((response) => {
        enqueueSnackbar("OTP sent successfully", {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
        });
        if (status === 0) {
          setStatus(1);
        }
      })
      .catch((error) => {
        const data = error?.response?.data;
        enqueueSnackbar(data?.message || "Something went wrong", {
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center",
          },
        });
      });
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {/* <Box height="100vh">
          <img
            src="/images/assets/login/login-bg.svg"
            width="100%"
            height="100%"
          />
        </Box> */}
          <Avatar
            src={
              mobile
                ? "/images/assets/login/login-bg-mobile.svg"
                : "/images/assets/login/login-bg.svg"
            }
            variant="square"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Stack spacing={3} sx={{ position: "absolute", px: 2, py: 3 }}>
            <img src="/images/assets/login/logo.svg" height={100} />
            <Typography color="white" align="center" width={{ lg: 500 }}>
              Empowering company and the candidate by placing right talent in
              the right place.
            </Typography>
            <Hidden smUp>
              {status === 0 ? (
                <LoginNow
                  LoginAPICALL={LoginAPICALL}
                  phone={phone}
                  setPhone={setPhone}
                />
              ) : status === 1 ? (
                <EnterOtp
                  LoginAPICALL={LoginAPICALL}
                  setStatus={setStatus}
                  phone={phone}
                />
              ) : (
                <SignUp phone={phone} />
              )}
            </Hidden>
          </Stack>
        </Box>
      </Grid>

      <Hidden smDown>
        <Grid item sm={6}>
          <Stack
            height="100vh"
            justifyContent="center"
            alignItems="center"
            px={7}
            sx={{ bgcolor: "#F4F4F4" }}
          >
            {status === 0 ? (
              <LoginNow
                LoginAPICALL={LoginAPICALL}
                phone={phone}
                setPhone={setPhone}
              />
            ) : status === 1 ? (
              <EnterOtp
                LoginAPICALL={LoginAPICALL}
                setStatus={setStatus}
                phone={phone}
              />
            ) : (
              <SignUp phone={phone} />
            )}
          </Stack>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Login;
