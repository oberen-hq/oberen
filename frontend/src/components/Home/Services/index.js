import React from "react";
import Icon1 from "../../../images/svg-1.svg";
import Icon2 from "../../../images/svg-2.svg";
import Icon3 from "../../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <React.Fragment>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Get rid of unemployment</ServicesH2>
            <ServicesP>
              With Simplify, there is always an option and a way to escape into
              financial freedom.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Global Access</ServicesH2>
            <ServicesP>
              You have the ability to reach our platform from all around the
              world, nothing is stopping you.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              Unlimited opportunities with limitless applications to ensure your
              place at your dream job.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </React.Fragment>
  );
};

export default Services;
