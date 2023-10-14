import { Box, Button, ButtonGroup, Flex, Heading, Link, useColorModeValue, Text, VStack, SimpleGrid, Image, Card } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon, LinkIcon } from '@chakra-ui/icons'
import ColorModeButton from "./helpers/colorModeButton"
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
import darkbg from '/img/adrien-olichon-VzRKG0piEp8-unsplash.jpg'
import lightbg from '/img/raychel-sanner-YP2MNNId-Qs-unsplash.jpg'
import { hugeSize } from "./starfleet/constants";

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
  const photo = useColorModeValue(lightbg, darkbg)
  const photoCredit = useColorModeValue(
    <Box>Photo by <a href="https://unsplash.com/@raychelsnr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Raychel Sanner</a> on <a href="https://unsplash.com/photos/YP2MNNId-Qs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></Box>,
    <Box>Photo by <a href="https://unsplash.com/@ninoliverpool?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nino Yang</a> on <a href="https://unsplash.com/photos/DOIgz9_qmFI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></Box>)

  // const holdThis = <Box>Photo by <a href="https://unsplash.com/@adrienolichon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Adrien Olichon</a> on <a href="https://unsplash.com/photos/VzRKG0piEp8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></Box>
  // const fonts = ["okuda", "mono"]
  // const fontType = typeof (fonts)

  // type routeDef extends RouteObject[] = { path: string; element: JSX.Element; displayName: string; }[]
  // <> Figure out how extension works
  let makeUID = 0;
  const routes = [
    { path: "/", element: <Box minH={'xl'}>Sandbox<Image src={photo} /></Box>, displayName: "Home", font: "mono", uid: makeUID++ },
    { path: "/starfleet", element: <UniformShowcase />, displayName: "Uniform Showcase", font: "mono", uid: makeUID++ },
    { path: "/cutshadow", element: <Tesselation />, displayName: "Cut Shadow", font: "mono", uid: makeUID++ },
    { path: "/slide", element: <SlideExample />, displayName: "Slide Example", font: "mono", uid: makeUID++ },
    { path: "/deepspace", element: <NebulaExample />, displayName: "Deep Space Theme", font: "okuda", uid: makeUID++ },
    // { path: "/", uid:makeUID++ }
    { uid: makeUID++, path: '/jsCheatSheet', element: <CheatSheet />, type: "notDB", displayName: "JS Cheat Sheet" },
    // { uid: makeUID++, path: '/triviaDisplay', element: <TriviaDisplay />, displayName: 'Trivia' },
    // { uid: makeUID++, path: "/notesDisplay", displayName: "Notes Database", element: <DisplayNotes /> },
    // { uid: makeUID++, displayName: 'People Database', path: '/peopleDisplay', element: <DisplayPeople /> },
    { uid: makeUID++, path: "/trivia", displayName: "Trivia board", element: <TriviaBoard />, type: "notDB" },
    { uid: makeUID++, path: "/keyboard", displayName: "Keyboard", element: <Keyboard />, type: "notDB" },
    { uid: makeUID++, path: "/generative", displayName: "Generative Map", element: <GenerativeBoard /> },
    { uid: makeUID++, path: "/cardeck", displayName: "CarDeck Simulator", element: <Gameboard />, type: "notDB" },
    { uid: makeUID++, path: "/savedHexBoard", displayName: "Saved Hex Board", element: <SavedBoard /> },
    { uid: makeUID++, path: "/create", displayName: "Create Hex Board", element: <CreateBoard /> },
    // { uid: makeUID++, path: "/snowflake", displayName: "Snowflake Generator", element: <Snowflake />, type: "notDB" },
  ];



  let keyGen = 0;
  const navBar = <SimpleGrid id="navBar" spacing={3} templateColumns={`repeat(auto-fill, minmax(${hugeSize}, 1fr))`}>
    {routes.map(eachRoute => {
      const path = eachRoute.path;
      return <Card key={keyGen++} w={hugeSize}><Button leftIcon={<ChevronLeftIcon />} rightIcon={<ChevronRightIcon />}><Link href={path}>{eachRoute.displayName}</Link></Button></Card>;
    })}
  </SimpleGrid>

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
        {showLabels && <Flex id="header" borderBottom={`2px solid ${fgColor}`} marginBottom={'xl'}>
          <Heading flex={3} as={'h1'}><Link href="/">ChakraUI Sandbox</Link></Heading>
          <VStack>
            <ColorModeButton />
            {navBar}
          </VStack>
        </Flex>}
        {/* <NebulaExample /> */}
        <RouterProvider router={router} />
        <Box id="footer" textAlign={'right'} borderTop={`2px solid ${fgColor}`} marginTop={'xl'}>
          <ButtonGroup flex={1}>
            <Button leftIcon={<LinkIcon />}><Link isExternal href="https://chakra-ui.com/">ChakraUI</Link></Button>
            <Button leftIcon={<LinkIcon />}><Link isExternal href="https://chakra-ui.com/docs/components/icon/usage#all-icons">Icon Reference</Link></Button>
            <Button leftIcon={<LinkIcon />}><Link href="https://chakra-ui-cheatsheet.vercel.app/">Cheat Sheet</Link></Button>
            <Button leftIcon={<LinkIcon />}><Link href="https://play.chakra-ui.com/playground">Playground</Link></Button>
          </ButtonGroup>
          <Text>{photoCredit}</Text>
          <Text>ChakraUI Sandbox</Text>
        </Box>
      </Box>
    </Box>
  )
}