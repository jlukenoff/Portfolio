import "../styles/globals.css";
import type { AppProps as BaseAppProps } from "next/app";
import Head from "next/head";
import NavBar from "../components/navbar";
import Layout from "../components/layout";

export default function App({ Component }: BaseAppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <NavBar />
      <Layout>
        <Component />
      </Layout>
    </>
  );
}
