import "../styles/globals.css";
import type { AppProps as BaseAppProps } from "next/app";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../config/createEmotionCache";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../config/theme";
import NavBar from "../components/navbar";
import Layout from "../components/layout";
import { Inter } from "next/font/google";

const clientSideEmotionCache = createEmotionCache();

interface AppProps extends BaseAppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
}: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Layout>
          <Component />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
