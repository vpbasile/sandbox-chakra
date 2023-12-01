import Home from "./components/Home";
import JSCheatSheet from "./components/JSCheatSheet";
import Layout from "./layout";
import { myRouteDef } from "./layout/typeRoute";
import { Routes, Route } from "react-router-dom";
import UniformShowcase from "./starfleet/UniformShowcase";
// import UniformShowcase from "./starfleet/UniformShowcase"
import Header from "./sandboxHeader";
import HomeComponent from "./sandboxHome";

export type routeType = {
  path: string;
  element: JSX.Element;
  displayName: string;
  font?: string;
  uid: number;
  tags?: string;
}


export default function App() {

  // ---------------------------------------------
  // <> Render Prep
  // ---------------------------------------------
  // const threedeeShadow = "-0.1em 0.1em .2em red, 0.1em -0.1em .2em blue"

  // <> FIXME: You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.

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