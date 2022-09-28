import { useState } from "react";

import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { SocialMediaTopBar } from "./components/SocialMediaTopBar/SocialMediaTopBar";
import { MainCover } from "./components/MainCover/MainCover";
import { EndpointCloud } from "./components/EndpointCloud/EndpointCloud";

function App() {
  return (
    <>
      <SocialMediaTopBar />
      <NavBar />
      <MainCover />
      <EndpointCloud />
    </>
  );
}

export default App;
