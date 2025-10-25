import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import { TrafficLightWithHooks } from "./02-useEffect/TrafficLightWithHooks";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { HooksApp } from "./HooksApp";
import { PokemonPage } from "./03-examples/PokemonPage";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHooks /> */}
    <PokemonPage />
  </StrictMode>
);
