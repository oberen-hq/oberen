import React from "react";
import moment from "moment";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const currentYear = moment().format("YYYY");

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <React.Fragment>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/documentation">Documentation</FooterLink>
                <FooterLink to="/testimonials">Testimonials</FooterLink>
                <FooterLink to="/investors">Investors</FooterLink>
                <FooterLink to="/jobs">Jobs</FooterLink>
                <FooterLink to="/tos">Terms Of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/contact">Contact</FooterLink>
                <FooterLink to="/support">Support</FooterLink>
                <FooterLink to="/">Location</FooterLink>
                <FooterLink to="/sponsors">Sponsorships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Partners</FooterLinkTitle>
                <FooterLink to="/partners/affilate">
                  Become an affiliate
                </FooterLink>
                <FooterLink to="/partners/influencer">
                  Become an influencer
                </FooterLink>
                <FooterLink to="/partners/perks">Perks</FooterLink>
                <FooterLink to="/partners/help">Help</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
                <FooterLink to="/">LinkedIn</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Simplify
              </SocialLogo>
              <WebsiteRights>
                Simplify &copy; {currentYear} All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </React.Fragment>
  );
};

export default Footer;
