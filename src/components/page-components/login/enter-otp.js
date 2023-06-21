import {
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import axios from "axios";
import { useSnackbar } from "notistack";
import OtpInput from "react-otp-input";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PhoneLoginURL } from "../../../api/api-route";
import CustomButton from "../custom-button";

const EnterOtp = ({ phone, setStatus, LoginAPICALL }) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [otp, setOtp] = useState("");
  const [otpTimer, setOtpTimer] = useState(5);
  const [resend, setResend] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (otpTimer > 0) {
      setResend(true);
      const interval = setInterval(() => {
        setOtpTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResend(false);
    }
  }, [otpTimer]);

  const handleVerifyOTP = () => {
    if (otp.length < 6) {
      enqueueSnackbar("OTP must be 6 digits", {
        variant: "warning",
      });
    } else {
      setLoading(true);
      axios
        .patch(PhoneLoginURL, {
          phone: phone,
          otp: otp,
          action: "authentication",
          fcmId: "fcmId",
          deviceId: "xyz",
        })
        .then((response) => {
          const { data } = response;
          localStorage.setItem("test-token", data?.accessToken);
          if (!data?.user) {
            setStatus(2);
          } else {
            localStorage.setItem("test-user", data?.user);
            enqueueSnackbar("Login Successfull", {
              variant: "success",
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center",
              },
            });
            router.replace("/");
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
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <Paper elevation={2}>
      <Stack spacing={2} p={3}>
        <Typography fontWeight={600}>Enter OTP</Typography>
        <Typography color="textPrimary" fontSize={{ xs: 12, sm: 14 }}>
          Please enter the OTP that has been sent to your given phone number
          {` ${phone.slice(0, 2)}******${phone.slice(-2)}`}
        </Typography>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputType="number"
          inputStyle={{
            width: "13%",
            height: 50,
            fontSize: 18,
            marginRight: "2%",
            border: "1px solid #E4E4E4",
            borderRadius: 5,
          }}
          renderInput={(props) => <input {...props} />}
        />
        <Stack alignItems="center">
          <Typography color="textSecondary">
            00:{otpTimer < 10 ? "0" + otpTimer : otpTimer}
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="caption" color="textSecondary">
              Didn’t receive the code?
            </Typography>
            <Typography
              color={resend ? "textSecondary" : "error"}
              fontWeight={600}
              fontSize={12}
              lineHeight={1}
              variant="button"
              onClick={() => {
                //default resend=false, if false--->grey else true--->red
                if (!resend) {
                  setOtpTimer(5);
                  LoginAPICALL();
                }
              }}
              sx={{
                textTransform: "capitalize",
                ml: 0.5,
                cursor: resend ? "not-allowed" : "pointer",
              }}
            >
              Resend
            </Typography>
          </Box>
        </Stack>
        <CustomButton
          color="primary"
          onClick={handleVerifyOTP}
          text={
            loading ? (
              <CircularProgress size={18} color="grey" />
            ) : (
              "  Verify & proceed"
            )
          }
        />
      </Stack>
    </Paper>
  );
};

export default EnterOtp;
