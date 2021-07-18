import React from "react";
import { HeroContainer, HeroBg, VideoBg } from "./HeroElements";
import Video from "../../videos/video.mp4";

const HeroSection = () => {
  return (
    <React.Fragment>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Making Money Made Easy</HeroH1>
          <HeroP>
            Sign Up for a new account today and recieve a 7 day trial with extra
            benefits.
          </HeroP>
          <HeroBtnWrapper>
            <Button to="signup">
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </React.Fragment>
  );
};

export default HeroSection;
