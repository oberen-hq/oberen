import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../../ButtonElement";
import Video from "../../../videos/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const history = useHistory();

  const onHover = () => {
    setHover(!hover);
  };

  const relocateWindow = () => {
    history.push("/sign-up");
    window.location.href = "/sign-up";
  };

  return (
    <React.Fragment>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Make Money On The Go</HeroH1>
          <HeroP>
            Sign Up for a new account today and recieve a 7 day trial with extra
            to get into the world of work.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              onClick={() => relocateWindow()}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </React.Fragment>
  );
};

export default HeroSection;
