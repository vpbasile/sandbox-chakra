import { Text, Box, Link, Heading, ChakraProvider } from "@chakra-ui/react";
import MyLorem from "../helpers/myLorem";
import nebulaTheme from "../theming/themeNebula";

export default function NebulaExample() {
  return (
    <ChakraProvider theme={nebulaTheme}>
      <Box>
        <Box p="8" my={"8"} boxShadow={"cyanShadow"} bgColor={"green.bright"} border={"2px solid pink"}>
          <Heading as={'h2'} color={'green.bright'}>Next</Heading>
          <Link>Hyperlink</Link>
        </Box>
        <Box p="8" my={"8"} boxShadow={"goldShadow"}>
          <Heading as={'h2'}>Lorem Ipsum</Heading>
          <Text>ZZZZZ</Text>
          <MyLorem />
        </Box>
        <Box p="8" boxShadow={"purpleShadow"}>
          <MyLorem />
        </Box>
      </Box>
    </ChakraProvider>

  )
}