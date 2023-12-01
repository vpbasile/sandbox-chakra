import Home from "./components/Home";
import JSCheatSheet from "./components/JSCheatSheet";
import Layout from "./layout";
import { myRouteDef } from "./layout/typeRoute";
import { Routes, Route } from "react-router-dom";
import UniformShowcase from "./starfleet/UniformShowcase";
// import UniformShowcase from "./starfleet/UniformShowcase"

export default function App() {

  // ---------------------------------------------
  // <> Render Prep
  // ---------------------------------------------
  // const threedeeShadow = "-0.1em 0.1em .2em red, 0.1em -0.1em .2em blue"

  let keyGen = 1
  const routesList: myRouteDef[] = [
    // <> Put the index route first
    { key: keyGen++, path: "cheat-sheet", buttonText: "Cheat Sheet for TS", element: <JSCheatSheet /> },
    { key: keyGen++, path: "UniformShowcase", buttonText: "Starfleet", element: <UniformShowcase /> }
  ]


  // ---------------------------------------------
  // <> Main Render
  // ---------------------------------------------

  return (
    <Routes>
      <Route path='/sandbox-chakra' element={<Layout routesList={routesList} />}>
        <Route index element={<Home />} />
        {routesList.map(route => <Route path={route.path} element={route.element} />)}
      </Route>
    </Routes>
  )
}