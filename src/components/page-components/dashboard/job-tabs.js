import { Box, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

const AntTabs = styled(Tabs)({
  paddingTop: "20px",
  //borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    backgroundColor: "#EFEFEF",
    borderRadius: "15px 15px 0px 0px",
    marginRight: "10px",
    textTransform: "none",
    "&.Mui-selected": {
      backgroundColor: "#2D9AFF",
      color: "white",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

const JobTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <AntTabs value={value} onChange={handleChange}>
        <AntTab label="Applied" />
        <AntTab label="Pending" />
        <AntTab label="Completed" />
      </AntTabs>
    </Box>
  );
};

export default JobTabs;
