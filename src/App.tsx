import { Box, Button, ButtonGroup, Flex, Heading, Link, useColorModeValue } from "@chakra-ui/react"
import { LinkIcon } from '@chakra-ui/icons'
import ColorModeButton from "./helper/colorModeButton"
import HexBrowser from "./hexboard/browser";
// import UniformShowcase from "./starfleet/UniformShowcase"

export default function App() {

  const showLabels = false;
  // ---------------------------------------------
  // <> Render Prep
  // ---------------------------------------------
  // const threedeeShadow = "-0.1em 0.1em .2em red, 0.1em -0.1em .2em blue"

  // Useful things for reacting to color mode
  // const bgColor = useColorModeValue('white', 'black')
  const fgColor = useColorModeValue('black', 'white')

  // ---------------------------------------------
  // <> Main Render
  // ---------------------------------------------

  return (
    <Box id="wrapper" m={10}>
      <Box id="appContainer" p={'3xl'}>
        {showLabels && <Flex id="header" borderBottom={`2px solid ${fgColor}`} marginBottom={'xl'}>
          <Heading flex={3} as={'h1'}>ChakraUI Sandbox</Heading>
          <ColorModeButton />
        </Flex>}
        {/* <TE /> */}
        {/* <Browser /> */}
        {/* <Box id="uniformInteractive" p={3}>
        </Box> */}
        {/* <UniformShowcase /> */}
        {/* <Writing /> */}
        {/* <PixelDraw /> */}
        {<HexBrowser />}
      </Box>
      <Box id="footer" textAlign={'right'} borderTop={`2px solid ${fgColor}`} marginTop={'xl'}>ChakraUI Sandbox
        <ButtonGroup flex={1}>
          <Button leftIcon={<LinkIcon />}><Link isExternal href="https://chakra-ui.com/">ChakraUI</Link></Button>
          <Button leftIcon={<LinkIcon />}><Link href="https://chakra-ui-cheatsheet.vercel.app/">Cheat Sheet</Link></Button>
          <Button leftIcon={<LinkIcon />}><Link href="https://play.chakra-ui.com/playground">Playground</Link></Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}