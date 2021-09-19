import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// Components
import Body from "../components/Body";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import GridContainer from "../components/GridContainer";
import LeftGrid from "../components/LeftGrid";
import RightGrid from "../components/RightGrid";
import TurtleFeed from "../components/TurtleFeed";
import Chat from "../components/Chat";
import Donate from "../components/Donate";
import AboutUs from "../components/AboutUs";
import How from "../components/How";
import CAD from "../components/CAD";
import VideoPitch from "../components/VideoPitch";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SeeTurtle - What The Hack</title>
        <meta
          name="SeeTurtle - Cleaning up microplastics"
          content="SeeTurtle is a robotic turtle which travels the ocean, filtering microplastics as it swims, transmitting a livestream of its dives to raise awareness of the amount of plastics removed."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <LeftNavbar />
        <Navbar />
        <Landing />
        <GridContainer>
          <LeftGrid />
          <RightGrid>
            <TurtleFeed embedId="2I6hDqCrI9o" turtleFeed={true} />
            <Chat />
          </RightGrid>
        </GridContainer>
        <Donate />
        <AboutUs />
        <How />
        <CAD />
        <VideoPitch />
      </Body>
    </>
  );
};

export default Home;
