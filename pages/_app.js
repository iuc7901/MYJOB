import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { SnackbarProvider, useSnackbar } from "notistack";
import TopBar from "../src/components/page-components/dashboard/topbar";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <SnackbarProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>
            {Component.title ? `${Component.title} | MyJob` : "MyJob"}
          </title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {Component.showTopBar ? (
            <TopBar pageTitle={Component.title} />
          ) : (
            <></>
          )}
          {/* <TopBar pageTitle={Component.title} /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </SnackbarProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
