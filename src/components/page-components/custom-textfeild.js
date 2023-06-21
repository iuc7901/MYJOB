import React from "react";
import { alpha, styled } from "@mui/material/styles";
import { Avatar, Box, TextField } from "@mui/material";

const RedditTextField = styled((props) => (
  <TextField
    InputProps={{
      disableUnderline: true,
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    borderRadius: 8,
    backgroundColor: "transparent",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&.Mui-disabled": {
      backgroundColor: "transparent",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },
  },
}));

const CutsomTextFeild = ({
  label,
  type,
  value,
  src,
  disabled,
  onChange,
  error,
  helperText,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      border="1px solid #EAEAEA"
      //border="1px solid"
      //borderColor={error ? red : grey}
      borderRadius={3}
      px={2}
    >
      <img src={src} style={{ height: 20, width: 20 }} />
      <RedditTextField
        fullWidth
        label={label}
        type={type}
        value={value}
        disabled={disabled}
        error={error}
        helperText={helperText}
        onChange={onChange}
        variant="filled"
        size="small"
      />
    </Box>
  );
};

export default CutsomTextFeild;
