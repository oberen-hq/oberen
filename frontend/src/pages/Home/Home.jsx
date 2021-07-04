import { useState } from "react";
import styled from "styled-components";
import AnimatedNavbar from "../../components/AnimatedNavbar";

export default function Home() {
  const duration = 300;

  return <AnimatedNavbar duration={duration} />;
}
