import { jsx, Flex } from "theme-ui";
import React from "react";
import Header from "./Header/";
import Footer from "./Footer/";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ children }: Props) {
  return (
    <Flex
      sx={{
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <main
        //@ts-ignore
        sx={{
          variant: "layout.main",
        }}
      >
        {children}
      </main>
    </Flex>
  );
}
