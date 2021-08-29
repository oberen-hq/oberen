import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children?: any }): any {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
}
