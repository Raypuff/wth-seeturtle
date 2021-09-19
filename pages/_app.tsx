import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SeeTurtle - What The Hack</title>
        <meta
          name="SeeTurtle - Cleaning up microplastics"
          content="SeeTurtle is a robotic turtle which travels the ocean, filtering microplastics as it swims, transmitting a livestream of its dives to raise awareness of the amount of plastics removed."
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
