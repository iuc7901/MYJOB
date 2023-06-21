import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import theme from "../src/theme";
import { alpha, styled } from "@mui/material/styles";
import { useState } from "react";

const CssTextField = styled(TextField)({
  // "& label": {
  //   marginLeft: "30px",
  // },
  "& label.Mui-focused": {
    color: "orange",
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "transparent",
    border: "1px solid ",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },
    "&.Mui-error": {
      border: "1px solid red",
    },
  },
});

const Practice = () => {
  //const [error, setError] = useState(true);

  return (
    <Stack spacing={2} alignItems="center" py={10}>
      <FormControl variant="filled">
        <InputLabel>email</InputLabel>
        <FilledInput
          // error
          // helperText="required"
          endAdornment={
            <InputAdornment position="end">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>

      <CssTextField
        label="With sx"
        variant="filled"
        error
        helperText="hyy"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid grey",
          //borderRadius: 3,
          //borderColor: error ? "red" : "grey",
        }}
      >
        <AccountCircle sx={{ ml: 2 }} />
        <CssTextField
          label="with sx"
          variant="filled"
          required
          error
          helperText="msg"
          InputProps={{ disableUnderline: true }}
        />
      </Box>
    </Stack>
  );
};

Practice.showTopBar = false;
export default Practice;
