import styled from "styled-components";

export const Container = styled.div`
  background: rgb(15, 15, 15);
  width: 350px;
  height: 450px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  padding: 2em;
`;

export const Heading = styled.p`
  font-size: 2em;
  margin-bottom: 0.5em;
`;

export const Box = styled.div`
    margin 0.2em 0;
`;

export const Label = styled.p``;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin: 0.5em 0;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 102%;
    height: 105%;
    border-radius: 10px;
    background: linear-gradient(to-right, #ff416c, #ff4b2b);
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(19, 19, 19);
  color: #fff;
  border: none;
  outline: none;
  padding-left: 0.8em;
  border-radius: 10px;
  transition: all 0.4s;

  &:focus::placeholder {
    transition: all 0.4s ease-in;
    color: var(--muted);
  }
`;

export const Submit = styled.button``;

export const Text = styled.p``;

export const PageLink = styled.a``;
