import { styled, Typography } from "@mui/material";
import React from "react";

const CustomTypography = ({ children, fontSize, fontWeight, color, sx }) => {
  return (
    <Typography
      sx={{
        color: `${color}`,
        fontWeight: `${fontWeight}`,
        fontSize: {
          md: `${fontSize}px`,
          sm: `${fontSize - 2}px`,
          xs: `${fontSize - 4}px`,
        },
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
