import { Box, Button, Center, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import { routeType } from "../AppTypes";
import ColorModeButton from "../z-helpers/colorModeButton";
import NavMenu from "./navMenu";


// import { useState } from "react";

export default function Header(props: { routesList: routeType[], hideLabels: () => void }) {
    const routesList = props.routesList
    return (<Box id="header" borderBottom={`2px`} marginBottom={'xl'} w={'full'} p={5}>
        <Center w={'full'}>
            <Image src="/img/logo.svg" h={10} p={1} />
            <Heading color={'blue.500'} flex={3} as={'h1'} p={'xl'} textShadow={2}><>sandbox-chakra</></Heading>
        </Center>
        <Center w={'full'}>
            <Text p={'xl'}>Remember to think mobile-first.</Text>
        </Center>
        <Spacer />
        <ColorModeButton />
        <Button onClick={props.hideLabels}>Hide UI</Button>
        <NavMenu routesList={routesList} />
    </Box >)
}