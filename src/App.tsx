import { Box, Button, ButtonGroup, Link, useColorModeValue, Text } from "@chakra-ui/react"
import { LinkIcon } from '@chakra-ui/icons'
import NebulaExample from "./examples/nebulaExample";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UniformShowcase from "./starfleet/UniformShowcase";
import Tesselation from "./examples/tesselationBG";
import SlideExample from "./examples/slide";
import Gameboard from "./(games)/gameboard";
import CreateBoard from "./hexboard/boards/CreateBoard";
import GenerativeBoard from "./hexboard/boards/Generative";
import Keyboard from "./hexboard/boards/Keyboard";
import SavedBoard from "./hexboard/boards/SavedBoard";
import TriviaBoard from "./hexboard/boards/TriviaBoard";
import CheatSheet from "./jsCheatSheet";
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


  const showLabels = true;
  // ---------------------------------------------
  // <> Render Prep
  // ---------------------------------------------
  // const threedeeShadow = "-0.1em 0.1em .2em red, 0.1em -0.1em .2em blue"

  // <> FIXME: You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.

  // Useful things for reacting to color mode
  // const bgColor = useColorModeValue('white', 'black')
  const fgColor = useColorModeValue('black', 'white')

  // <> FIXME - These should be a router, too!

  // <> Figure out how extension works
  let makeUID = 0;
  const routes: routeType[] = [
    // <>  Not DB
    { path: "/", element: <HomeComponent />, displayName: "Home", font: "mono", uid: makeUID++ },
    { path: "/starfleet", element: <UniformShowcase />, displayName: "Uniform Showcase", font: "mono", uid: makeUID++ },
    { path: "/cutshadow", element: <Tesselation />, displayName: "Cut Shadow", font: "mono", uid: makeUID++ },
    { path: "/slide", element: <SlideExample />, displayName: "Slide Example", font: "mono", uid: makeUID++ },
    { path: "/deepspace", element: <NebulaExample />, displayName: "Deep Space Theme", font: "okuda", uid: makeUID++ },
    { uid: makeUID++, path: '/jsCheatSheet', element: <CheatSheet />, displayName: "JS Cheat Sheet" },
    { uid: makeUID++, path: "/trivia", displayName: "Trivia board", element: <TriviaBoard />, },
    { uid: makeUID++, path: "/cardeck", displayName: "CarDeck Simulator", element: <Gameboard />, },
    // { uid: makeUID++, path: "/snowflake", displayName: "Snowflake Generator", element: <Snowflake />,},
    // <> DBMAN components
    // { uid: makeUID++, path: '/triviaDisplay', element: <TriviaDisplay />, displayName: 'Trivia' },
    // { uid: makeUID++, path: "/notesDisplay", displayName: "Notes Database", element: <DisplayNotes /> },
    // { uid: makeUID++, displayName: 'People Database', path: '/peopleDisplay', element: <DisplayPeople /> },
    { uid: makeUID++, path: "/keyboard", displayName: "Keyboard", element: <Keyboard />, },
    { uid: makeUID++, path: "/generative", displayName: "Generative Map", element: <GenerativeBoard /> },
    { uid: makeUID++, path: "/savedHexBoard", displayName: "Saved Hex Board", element: <SavedBoard /> },
    { uid: makeUID++, path: "/create", displayName: "Create Hex Board", element: <CreateBoard /> },

  ];

  // for(const eachHue in colorPallette){
  //   for(const eachColor in eachHue)
  //   console.log(eachColor)
  // }



  const router = createBrowserRouter(routes)

  // ---------------------------------------------
  // <> Main Render
  // ---------------------------------------------

  return (
    <Box id="wrapper" m={10}>
      <Box id="appContainer" p={'3xl'}>
        {showLabels && <Header foregroundColor={fgColor} routes={routes} />}
        {/* <NebulaExample /> */}
        <RouterProvider router={router} />
        <Box id="footer" textAlign={'right'} borderTop={`2px solid ${fgColor}`} marginTop={'xl'}>
          <ButtonGroup flex={1}>
            <Button leftIcon={<LinkIcon />}><Link isExternal href="https://chakra-ui.com/">ChakraUI</Link></Button>
            <Button leftIcon={<LinkIcon />}><Link isExternal href="https://chakra-ui.com/docs/components/icon/usage#all-icons">Icon Reference</Link></Button>
            <Button leftIcon={<LinkIcon />}><Link isExternal href="https://chakra-ui-cheatsheet.vercel.app/">Cheat Sheet</Link></Button>
            <Button leftIcon={<LinkIcon />}><Link isExternal href="https://play.chakra-ui.com/playground">Playground</Link></Button>
            <Button leftIcon={<LinkIcon />}><Link isExternal href="https://github.com/vpbasile/sandbox-chakra">Sandbox on Github</Link></Button>
          </ButtonGroup>
          <Text>ChakraUI Sandbox</Text>
        </Box>
      </Box>
    </Box>
  )
}