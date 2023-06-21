import { Typography } from "@mui/material";
import Login from "../src/components/page-components/login";

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}

Home.title = "Login";
Home.showTopBar = false;
