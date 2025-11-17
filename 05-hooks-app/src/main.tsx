import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";

// import { TrafficLightWithHooks } from "./02-useEffect/TrafficLightWithHooks";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { HooksApp } from "./HooksApp";
// import { PokemonPage } from "./03-examples/PokemonPage";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { TasksApp } from "./05-useReducer/TaskApp";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords";
// import { MemoHooks } from "./06-memos/MemoHooks";
// import { MemoCounter } from "./06-memos/MemoCounter";
// import { InstagromApp } from "./07-useOptimistic/InstagromApp";
// import ClientInformation from "./08-use-suspense/ClientInformation";
import ProfessionalApp from "./09-useContext/ProfessionalApp";

import "./index.css";
// import { getUserAction } from "./08-use-suspense/api/get-user-action";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Toaster /> */}
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHooks /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHooks /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h2 className="text-4xl">Loading...</h2>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1001)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>
);
