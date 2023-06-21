import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import CustomButton from "../custom-button";
import CutsomTextFeild from "../custom-textFeild";

// const RedditTextField = styled((props) => (
//   <TextField
//     InputProps={{
//       disableUnderline: true,
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   "& .MuiFilledInput-root": {
//     borderRadius: 8,
//     backgroundColor: "#FFFFFF",
//     borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
//     transition: theme.transitions.create([
//       "border-color",
//       "background-color",
//       "box-shadow",
//     ]),
//     "&:hover": {
//       backgroundColor: "transparent",
//     },
//     "&.Mui-focused": {
//       backgroundColor: "transparent",
//     },
//   },
// }));

const SignUp = ({ phone }) => {
  // const textFeilds = [
  //   {
  //     label: "Enter Organization name",
  //     icon: "images/assets/login/users.svg",
  //     type: "text",
  //   },
  //   {
  //     label: "Enter your name",
  //     icon: "images/assets/login/profile.svg",
  //     type: "text",
  //   },
  //   {
  //     label: "Enter contact no.",
  //     icon: "images/assets/login/phone.svg",
  //     type: "number",
  //   },
  //   {
  //     label: "Enter Email ID",
  //     icon: "images/assets/login/email.svg",
  //     type: "email",
  //   },
  // ];

  return (
    <Paper elevation={2} sx={{ width: { md: 400, lg: 550 } }}>
      <Stack spacing={2} p={3}>
        <Typography fontWeight={600}>Enter Organization Details</Typography>
        <Typography variant="caption">
          Tell us some informations about your organizations to continue
        </Typography>
        <CutsomTextFeild
          label="Enter Organization name"
          src="images/assets/login/users.svg"
        />
        <CutsomTextFeild
          label="Enter your name"
          src="images/assets/login/profile.svg"
        />
        <CutsomTextFeild
          label="Enter contact no."
          src="images/assets/login/phone.svg"
          value={phone}
          disabled={true}
        />
        <CutsomTextFeild
          label="Enter Email ID"
          src="images/assets/login/email.svg"
        />
        {/* {textFeilds.map((each) => (
          <Box
            display="flex"
            alignItems="center"
            border="1px solid #EAEAEA"
            borderRadius={3}
            px={2}
          >
            <img src={each.icon} height={15} />
            <RedditTextField
              fullWidth
              label={each.label}
              type={each.type}
              variant="filled"
              size="small"
            />
          </Box>
        ))} */}
        <CustomButton color="primary" text="Next" />
      </Stack>
    </Paper>
  );
};

export default SignUp;
