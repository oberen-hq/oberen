import styled from "styled-components";

export const SignUp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
`;

export const SignUpLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SignUpRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SignUpLogo = styled.h3`
  font-size: 50px;
  font-weight: 800;
  color: #1775ee;
  margin-bottom: 10px;
`;

export const SignUpDesc = styled.span`
  font-size: 24px;
`;

export const SignUpBox = styled.form`
  height: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SignUpInput = styled.input`
  height: 50px;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 18px;
  padding-left: 20px;

  &:focus {
    outline: none;
  }
`;

export const SignUpButton = styled.button`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #1775ee;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const SignUpForgot = styled.span`
  text-align: center;
  color: #1775ee;
`;

export const SignInButton = styled.button`
  width: 60%;
  align-self: center;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #42b72a;
  color: white;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;
