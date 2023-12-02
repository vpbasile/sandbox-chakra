import Layout from "./layout";
import { myRouteDef } from "./layout/typeRoute";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UniformShowcase from "./starfleet/UniformShowcase";
import Home from "./Home";
import JSCheatSheet from "./jsCheatSheet";
import ExampleCutShadow from "./examples/cutShadow";
import blueBG from '../public/img/sunTile/sunTileBlue.svg'
// import UniformShowcase from "./starfleet/UniformShowcase"

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
    { key: keyGen++, element: <UniformShowcase />, path: "UniformShowcase", navText: "Starfleet" },
    { key: keyGen++, element: <JSCheatSheet />, path: "cheat-sheet", navText: "Cheat Sheet for TS" },
    { key: keyGen++, element: <ExampleCutShadow bgImage={blueBG} bgSize={100} />, path: "cut-shadow", navText: "Cut Shadow Example" }
  ]


  // ---------------------------------------------
  // <> Main Render
  // ---------------------------------------------

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sandbox-chakra' element={<Layout routesList={routesList} />}>
          <Route index element={<Home />} />
          {routesList.map(route => <Route key={route.key} path={route.path} element={route.element} />)}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}