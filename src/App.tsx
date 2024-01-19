import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout';
import { routeType } from './components/typeRoute';
import MenuExample from './examples/menuExample';
import NebulaExample from './examples/nebulaExample';
import SlideExample from './examples/slide';
import Tesselation from './examples/tesselationBG';
import CreateBoard from './hexboard/boards/CreateBoard';
import GenerativeBoard from './hexboard/boards/Generative';
import Keyboard from './hexboard/boards/Keyboard';
import SavedBoard from './hexboard/boards/SavedBoard';
import TriviaBoard from './hexboard/boards/TriviaBoard';
import CheatSheet from './jsCheatSheet';
import HomeComponent from './sandboxHome';
import UniformShowcase from './starfleet/UniformShowcase';

function App() {
  let makeUID = 0;
  const routes: routeType[] = [
    // <>  Not DB
    { uid: makeUID++, path: "/sandbox-chakra/", element: <HomeComponent />, displayName: "Home", font: "mono" },
    { uid: makeUID++, path: "/sandbox-chakra/starfleet", element: <UniformShowcase />, displayName: "Uniform Showcase", font: "mono" },
    { uid: makeUID++, path: "/sandbox-chakra/cutshadow", element: <Tesselation />, displayName: "Cut Shadow", font: "mono" },
    { uid: makeUID++, path: "/sandbox-chakra/slide", element: <SlideExample />, displayName: "Slide Example", font: "mono" },
    { uid: makeUID++, path: "/sandbox-chakra/deepspace", element: <NebulaExample />, displayName: "Deep Space Theme", font: "okuda" },
    { uid: makeUID++, path: "/sandbox-chakra/cheatSheet", displayName: "JS Cheat Sheet", element: <CheatSheet /> },
    { uid: makeUID++, path: "/sandbox-chakra/trivia", displayName: "Trivia board", element: <TriviaBoard />, },
    { uid: makeUID++, path: "/sandbox-chakra/keyboard", displayName: "Keyboard", element: <Keyboard />, },
    { uid: makeUID++, path: "/sandbox-chakra/generative", displayName: "Generative Map", element: <GenerativeBoard /> },
    { uid: makeUID++, path: "/sandbox-chakra/savedHexBoard", displayName: "Saved Hex Board", element: <SavedBoard /> },
    { uid: makeUID++, path: "/sandbox-chakra/create", displayName: "Create Hex Board", element: <CreateBoard /> },
    // { uid: makeUID++, path: "/sandbox-chakra/snowflake", displayName: "Snowflake Generator", element: <Snowflake />,},
    // <> DBMAN components
    // { uid: makeUID++, path: '/triviaDisplay', element: <TriviaDisplay />, displayName: 'Trivia' },
    // { uid: makeUID++, path: "/sandbox-chakra/notesDisplay", displayName: "Notes Database", element: <DisplayNotes /> },
    // { uid: makeUID++, displayName: 'People Database', path: '/peopleDisplay', element: <DisplayPeople /> },
    { uid: makeUID++, path: "/sandbox-chakra/menuExample", displayName: "Menu Example", element: <MenuExample /> }

  ];
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/sandbox-chakra/' element={<Layout routesList={routes} showLabels={true} />}>
          <Route index element={<HomeComponent />} />
          {routes.map((route) => <Route key={route.uid} path={route.path} element={route.element} />)}
        </Route>
      </Routes >
    </BrowserRouter>
  )
}

export default App
