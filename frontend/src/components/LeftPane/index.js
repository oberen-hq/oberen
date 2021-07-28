import {
  LeftPaneContainer,
  Header,
  Navbar,
  NavbarLink,
  Span,
  Svg,
  PostButton,
  Footer,
  Account,
  Photo,
  ProfileImage,
  Name,
  Email,
} from "./LeftPaneElements";

import svgImage from "./icons";

const LeftPane = ({ user }) => {
  return (
    <LeftPaneContainer>
      <Header>Simplify 🤑</Header>
      <Navbar>
        <NavbarLink to="/feed">
          <Span>
            <Svg>{svgImage.home}</Svg>Home
          </Span>
        </NavbarLink>
        <NavbarLink to="/jobs">
          <Span>Jobs</Span>
        </NavbarLink>
        <NavbarLink to="/notifications">
          <Span>Notifications</Span>
        </NavbarLink>
        <NavbarLink to="/messages">
          <Span>Messages</Span>
        </NavbarLink>
        <NavbarLink to="/organizations">
          <Span>Organizations</Span>
        </NavbarLink>
        <NavbarLink to="/profile">
          <Span>Profile</Span>
        </NavbarLink>
        <NavbarLink to="/settings">
          <Span>Settings</Span>
        </NavbarLink>
      </Navbar>
      <PostButton>Make a Post</PostButton>
      <Footer>
        <Account>
          <Photo>
            {/* <ProfileImage
              alt="user"
              src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
            /> */}
          </Photo>
          <Name>Test</Name>
          <Email>Test</Email>
        </Account>
      </Footer>
    </LeftPaneContainer>
  );
};

export default LeftPane;
