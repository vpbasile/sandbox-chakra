import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routeType } from './AppTypes';
import { Reboot } from './elig/reboot';
import MenuExample from './examples/menuExample';
import NebulaExample from './examples/nebulaExample';
import ResponsiveExample from './examples/responsive';
import SlideExample from './examples/slide';
import Tesselation from './examples/tesselationBG';
import Playlists from './Playlists';
import ReadingListDisplay from './ReadingList/index';
import HomeComponent from './sandboxHome';
import UniformShowcase from './starfleet/UniformShowcase';
import TemperatureChart from './temperature/TemperatureChart';
import Layout from './z-layout';

function App() {
  let makeUID = 0;
  const routes: routeType[] = [
    // <>  Not DB
    { uid: makeUID++, path: "/sandbox-chakra/", element: <HomeComponent />, displayName: "Home", font: "mono", group: "misc" },
    { uid: makeUID++, path: "/sandbox-chakra/readinglistdisplay", element: <ReadingListDisplay />, displayName: "Reading List Display", font: "mono", group: "misc" },
    { uid: makeUID++, path: "/sandbox-chakra/playlists", element: <Playlists />, displayName: "Playlists", font: "mono", group: "misc" },
    { uid: makeUID++, path: "/sandbox-chakra/starfleet", element: <UniformShowcase />, displayName: "Uniform Showcase", font: "mono", group: "misc" },
    { uid: makeUID++, path: "/sandbox-chakra/cutshadow", element: <Tesselation />, displayName: "Cut Shadow", font: "mono", group: "example" },
    { uid: makeUID++, path: "/sandbox-chakra/slide", element: <SlideExample />, displayName: "Slide Example", font: "mono", group: "example" },
    { uid: makeUID++, path: "/sandbox-chakra/deepspace", element: <NebulaExample />, displayName: "Deep Space Theme", font: "okuda", group: "example" },
    { uid: makeUID++, path: "/sandbox-chakra/menuExample", displayName: "Menu Example", element: <MenuExample />, group: "misc" },
    { uid: makeUID++, path: "/sandbox-chakra/responsive", displayName: "Responsive", element: <ResponsiveExample />, group: "example" },
    { uid: makeUID++, path: "/sandbox-chakra/temperature/", element: <TemperatureChart />, displayName: "Temperature", group: "misc" },
    { uid: makeUID++, path: "/sandbox-chakra/eligibility/", element: <Reboot />, displayName: "Eligibility", group: "misc" },
    // <> DBMAN components
    // { uid: makeUID++, displayName: 'People Database', path: '/peopleDisplay', element: <DisplayPeople /> group: 'dbMan' },
  ];
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/sandbox-chakra/' element={<Layout routesList={routes} />}>
          <Route index element={<HomeComponent />} />
          {routes.map((route) => <Route key={route.uid} path={route.path} element={route.element} />)}
        </Route>
      </Routes >
    </BrowserRouter>
  )
}

export default App
