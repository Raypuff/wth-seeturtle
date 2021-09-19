import type { NextPage } from "next";
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
import Linkedin from "../components/Linkedin";

const Home: NextPage = () => {
  return (
    <>
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
        <Linkedin/>
      </Body>
    </>
  );
};

export default Home;
