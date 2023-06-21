import {
  Box,
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect } from "react";
import CustomButton from "../custom-button";
import { useState } from "react";
import axios from "axios";
import { EmployeeReqURL } from "../../../api/api-route";
import { enqueueSnackbar } from "notistack";

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
    border: "2px solid #EAEAEA",
    backgroundColor: "#FFFFFF",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      border: ` 2px solid ${theme.palette.primary.main}`,
    },
    "&.Mui-selected": {
      backgroundColor: "transparent",
      border: ` 2px solid ${theme.palette.primary.main}`,
    },
  },
  "& input:invalid + fieldset": {
    border: "2px solid red",
  },
}));

const EmployeeReq = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const employeeReq = [
    {
      label: "Job title",
      type: "text",
      key: "title",
      grid: 12,
    },
    {
      label: "Job description",
      type: "text",
      key: "description",
      grid: 12,
    },
    {
      label: "Vacancy",
      type: "number",
      key: "noOfEmployees",
      grid: 6,
    },
    {
      label: "Experience",
      type: "number",
      key: "experience",
      grid: 6,
    },
    {
      label: "Manpower type",
      type: "select",
      options: [
        { label: "On PayRoll", value: 1 },
        { label: "Off PayRoll", value: 2 },
        { label: "Direct Recruitment", value: 3 },
      ],
      key: "type",
      grid: 12,
    },
    {
      label: "Location",
      type: "text",
      key: "workLocation",
      grid: 12,
    },
    {
      label: "Salary",
      type: "number",
      key: "salary",
      grid: 12,
    },
    // {
    //   label: "Min. Salary",
    //   type: "number",
    //   key: "minSalary",
    //   grid: 6,
    // },
    // {
    //   label: "Max. Salary",
    //   type: "number",
    //   key: "maxSalary",
    //   grid: 6,
    // },
  ];

  const validateAllFeilds = () => {
    let _error = error;
    let errorFound = false;
    employeeReq.forEach((each) => {
      if (!(data[each.key] && data[each.key] !== "")) {
        _error[each.key] = each.label + " is required";
        errorFound = true;
      } else {
        _error[each.key] = "";
      }
    });
    setError({ ..._error });
    return errorFound;
  };

  const handleCreateEmployeeReq = () => {
    if (!validateAllFeilds()) {
      setLoading(true);
      axios
        .post(
          EmployeeReqURL,
          {
            title: data.title,
            noOfEmployees: data.noOfEmployees,
            description: data.description,
            // minSalary: data.minSalary,
            // maxSalary: data.maxSalary,
            salary: data.salary,
            experience: data.experience,
            type: data.type,
            workLocation: data.workLocation,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("test-token")}`,
            },
          }
        )
        .then((response) => {
          enqueueSnackbar("Employee Request Created Sucessfully", {
            variant: "success",
            anchorOrigin: {
              horizontal: "center",
              vertical: "bottom",
            },
          });
        })
        .catch((error) => {
          const data = error?.response?.data;
          enqueueSnackbar(data?.message || "Something went wrong", {
            variant: "error",
            anchorOrigin: {
              horizontal: "center",
              vertical: "bottom",
            },
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  //console.log("data----->", data);
  //console.log("error----->", error);

  return (
    <Paper square>
      <Stack sx={{ p: 3 }}>
        <Typography>Create Employee request</Typography>
        <Grid container spacing={2} py={2}>
          {employeeReq.map((each) => (
            <Grid item xs={each.grid}>
              <Box>
                {each.type === "text" || each.type === "number" ? (
                  <RedditTextField
                    variant="filled"
                    fullWidth
                    label={each.label}
                    type={each.type}
                    value={data ? data[each.key] : ""}
                    error={!!error[each?.key]}
                    helperText={error[each?.key] || ""}
                    onChange={(e) => {
                      setData((data) => {
                        data[each.key] = e.target.value;
                        return { ...data };
                      });
                    }}
                  />
                ) : (
                  <RedditTextField
                    select
                    fullWidth
                    defaultValue={"-1"}
                    IconComponent={ExpandMoreIcon}
                    value={data ? data[each.key] : ""}
                    error={!!error[each?.key]}
                    helperText={error[each?.key] || ""}
                    onChange={(e) => {
                      setData((data) => {
                        data[each.key] = e.target.value;
                        return { ...data };
                      });
                    }}
                  >
                    <MenuItem disabled value="-1">
                      {each.label}
                    </MenuItem>
                    {each.options?.map((option) => (
                      <MenuItem value={option.value}>{option.label}</MenuItem>
                    ))}
                  </RedditTextField>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
        <CustomButton
          color="primary"
          text={
            loading ? <CircularProgress size={18} /> : "Create employee request"
          }
          onClick={handleCreateEmployeeReq}
        />
      </Stack>
    </Paper>
  );
};

export default EmployeeReq;
