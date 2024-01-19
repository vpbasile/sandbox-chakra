import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { routeType } from './AppTypes';
import MenuExample from './examples/menuExample';
import NebulaExample from './examples/nebulaExample';
import ResponsiveExample from './examples/responsive';
import SlideExample from './examples/slide';
import Tesselation from './examples/tesselationBG';
import CreateBoard from './hexboard/boards/CreateBoard';
import GenerativeBoard from './hexboard/boards/Generative';
import Keyboard from './hexboard/boards/Keyboard';
import SavedBoard from './hexboard/boards/SavedBoard';
import TriviaBoard from './hexboard/boards/TriviaBoard';
import Layout from './layout';
import HomeComponent from './sandboxHome';
import UniformShowcase from './starfleet/UniformShowcase';
import ProjectTrack from './ticketTrack/ProjectTrack';

function App() {
  let makeUID = 0;
  const routes: routeType[] = [
    // <>  Not DB
    { uid: makeUID++, path: "/sandbox-chakra/", element: <HomeComponent />, displayName: "Home", font: "mono", group: "misc" },
    { uid: makeUID++, path: "/sandbox-chakra/project/", element: <ProjectTrack />, displayName: "Project Track", group: "misc"},
    { uid: makeUID++, path: "/sandbox-chakra/starfleet", element: <UniformShowcase />, displayName: "Uniform Showcase", font: "mono", group: "misc" },
    { uid: makeUID++, path: "/sandbox-chakra/cutshadow", element: <Tesselation />, displayName: "Cut Shadow", font: "mono", group: "example" },
    { uid: makeUID++, path: "/sandbox-chakra/slide", element: <SlideExample />, displayName: "Slide Example", font: "mono", group: "example" },
    { uid: makeUID++, path: "/sandbox-chakra/deepspace", element: <NebulaExample />, displayName: "Deep Space Theme", font: "okuda", group: "example" },
    // { uid: makeUID++, path: "/sandbox-chakra/snowflake", displayName: "Snowflake Generator", element: <Snowflake />,group: },
    // <> DBMAN components
    // { uid: makeUID++, displayName: 'People Database', path: '/peopleDisplay', element: <DisplayPeople /> group: 'dbMan' },
    { uid: makeUID++, path: "/sandbox-chakra/menuExample", displayName: "Menu Example", element: <MenuExample />, group: "misc" },
    { uid: makeUID++, path: "/sandbox-chakra/responsive", displayName: "Responsive", element: <ResponsiveExample />, group: "example"},
    
    // <> Hexboard components
    { uid: makeUID++, path: "/sandbox-chakra/trivia", displayName: "Trivia board", element: <TriviaBoard />, group: "hex" },
    { uid: makeUID++, path: "/sandbox-chakra/keyboard", displayName: "Keyboard", element: <Keyboard />, group: "hex" },
    { uid: makeUID++, path: "/sandbox-chakra/generative", displayName: "Generative Map", element: <GenerativeBoard />, group: "hex" },
    { uid: makeUID++, path: "/sandbox-chakra/savedHexBoard", displayName: "Saved Board", element: <SavedBoard />, group:"hex" },
    { uid: makeUID++, path: "/sandbox-chakra/create", displayName: "Create Board", element: <CreateBoard />, group: "hex" },
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
