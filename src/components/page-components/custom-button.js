import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

// const BootstrapButton = styled(Button)(({ color }) => ({
//   textTransform: "capitalize",
//   borderRadius: 8,
//   fontSize: 14,
//   fontWeight: 400,
//   backgroundColor: color,
//   "&:hover": {
//     backgroundColor: color,
//   },
// }));

const CustomButton = ({ color, onClick, text }) => {
  return (
    <Button
      variant="contained"
      size="large"
      disableElevation
      disableFocusRipple
      disableRipple
      color={color}
      onClick={onClick}
      sx={{
        textTransform: "capitalize",
        borderRadius: 3,
        "&:hover": {
          backgroundColor: `${color}.main`,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
