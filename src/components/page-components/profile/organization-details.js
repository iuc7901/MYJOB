import { Box, Paper, Stack, TextField, Typography } from "@mui/material";
import { Person, Edit } from "@mui/icons-material/";
import React from "react";
import CustomTypography from "../custom-typography";
import { useState } from "react";

const OrganizationDetails = () => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  const details = [
    {
      title: "Org. Name",
      value: "My JOB Limited",
    },
    {
      title: "Your name",
      value: "Rahul Kumar ",
    },
    {
      title: "Email",
      value: "organization@gmail.com",
    },
    {
      title: "Contact no",
      value: "9556266575",
    },
  ];
  return (
    <Paper variant="outlined" width="100%" sx={{ borderRadius: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#DFF0FF",
          borderRadius: "11px 11px 0px 0px",
          color: "#0A7BE7",
          p: 2,
        }}
      >
        <Box display="flex">
          <Person />
          <Typography color="textPrimary" ml={1}>
            Organization details
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Edit fontSize="20" />
          <Typography
            variant="button"
            onClick={() => setEdit(!edit)}
            sx={{ ml: 1, cursor: "pointer", textTransform: "capitalize" }}
          >
            Edit
          </Typography>
        </Box>
      </Box>
      <Stack spacing={1} p={2}>
        {details.map((each) => (
          <Stack spacing={2} direction="row">
            <CustomTypography width={120} fontSize={16}>
              {each.title}:
            </CustomTypography>
            {edit ? (
              <TextField
                size="small"
                value={each.value}
                onChange={(e) => {
                  //conole.log("hyy");
                  setValue(e.target.value);
                }}
              />
            ) : (
              <CustomTypography fontWeight={500} fontSize={16}>
                {each.value}
              </CustomTypography>
            )}
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
};

export default OrganizationDetails;
