import { useState } from "react";

import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { SocialMediaTopBar } from "./components/SocialMediaTopBar/SocialMediaTopBar";
import { MainCover } from "./components/MainCover/MainCover";
import { EndpointCloud } from "./components/EndpointCloud/EndpointCloud";
import { XDRProtection } from "./components/XDRProtection/XDRProtection";
import { Statistics } from "./components/Statistics/Statistics";

function App() {
  return (
    <>
      <SocialMediaTopBar />
      <NavBar />
      <MainCover />
      <EndpointCloud />
      <XDRProtection />
      <Statistics />
    </>
  );
}

export default App;
