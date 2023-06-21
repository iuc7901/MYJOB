import {
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  Box,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../custom-button";
import CutsomTextFeild from "../custom-textFeild";

const LoginNow = ({ phone, setPhone, LoginAPICALL }) => {
  const [phoneError, setPhoneError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoginFeilds = () => {
    if (phone === "") {
      setPhoneError("Phone number should not be empty");
      return false;
    } else if (phone.length < 10) {
      setPhoneError("Please enter a valid phone number");
      return false;
    } else {
      setPhoneError("");
    }
    return true;
  };

  const handleLogin = async () => {
    if (handleLoginFeilds()) {
      setLoading(true);
      await LoginAPICALL();
      setLoading(false);
    }
  };

  return (
    <Paper elevation={2} sx={{ width: { md: 400, lg: 550 } }}>
      <Stack spacing={2} p={3}>
        <Typography fontWeight={600}>Login now to continue.</Typography>
        <CutsomTextFeild
          label="Enter phone no"
          value={phone}
          type="number"
          src="images/assets/login/phone.svg"
          error={!!phoneError}
          helperText={phoneError}
          onChange={(e) => {
            const _phone = e.target.value;
            if (_phone.length <= 10) {
              setPhone(_phone);
            }
          }}
        />
        <CustomButton
          color="primary"
          onClick={handleLogin}
          text={loading ? <CircularProgress size={18} color="grey" /> : "Login"}
        />
      </Stack>
    </Paper>
  );
};

export default LoginNow;
