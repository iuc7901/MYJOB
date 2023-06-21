import { Box, Paper, Stack, Typography } from "@mui/material";
import CustomTypography from "../custom-typography";
import theme from "../../../theme";
import React from "react";

const UploadCerti = () => {
  const documents = [
    {
      document: "PAN Card",
      status: "Created 14 February 2022",
    },
    {
      document: "FSSAI License",
      status: "Created 14 February 2022",
    },
    {
      document: "Company Incorp. Certificate",
      status: "Created 14 February 2022",
    },
    {
      document: "Shop & establishment certi...",
      status: "Created 14 February 2022",
    },
    {
      document: "MSME registration certifcate",
      status: "Created 14 February 2022",
    },
  ];

  return (
    <Paper variant="outlined" width="100%" sx={{ borderRadius: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "#DFF0FF",
          borderRadius: "11px 11px 0px 0px",
          color: "#0A7BE7",
          p: 2,
        }}
      >
        <img src="/images/assets/profile/certi-blue.svg" height={20} />
        <Typography color="textPrimary" ml={1}>
          Upload certificate
        </Typography>
      </Box>

      <Box sx={{ p: 2 }}>
        {documents.map((each) => (
          <Stack spacing={1} direction="row" mb={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#F8F8F8",
                borderRadius: "15px 3px 3px 15px",
                p: { xs: 0, sm: 2 },
              }}
            >
              <Stack>
                <img
                  src="/images/assets/profile/upload-certi.svg"
                  //style={{ height: "15px" }}
                  height={20}
                />
                <CustomTypography
                  color={theme.palette.text.secondary}
                  fontSize={14}
                >
                  Uploaded
                </CustomTypography>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                bgcolor: "#F8F8F8",
                borderRadius: "3px 15px 15px 3px",
                px: 2,
              }}
            >
              <Stack>
                <CustomTypography fontSize={16} fontWeight={500}>
                  {each.document}
                </CustomTypography>
                <Typography color="textSecondary" fontSize={10}>
                  {each.status}
                </Typography>
              </Stack>

              <Stack>
                <img src="/images/assets/profile/delete-grey.svg" height={20} />
              </Stack>
            </Box>
          </Stack>
        ))}
      </Box>
    </Paper>
  );
};

export default UploadCerti;
