import { Button, ButtonGroup, Center, Heading, Stack, Text } from "@chakra-ui/react";
import Nav from "./Nav";
import { myRouteDef } from "./typeRoute";
import ColorModeButton from '../helpers/colorModeButton';

// import { useState } from "react";

export default function Header(props: { routesList: myRouteDef[], hideLabels: () => void }) {
    return (<Stack id="header" borderBottom={`2px`} marginBottom={'xl'} w={'full'}>
        <Center w={'full'}>
            <Heading color={'blue.500'} flex={3} as={'h1'} p={'xl'} >sandbox-chakra</Heading>
        </Center>
        <Center w={'full'}>
            <Text p={'xl'}>Remember to think mobile-first.</Text>
        </Center>
        <Center w={'full'}>
            <ButtonGroup isAttached p={5}>
                <Nav routesList={props.routesList} />
                <ColorModeButton />
                <Button onClick={props.hideLabels}>Hide UI</Button>
            </ButtonGroup>
        </Center>
    </Stack >)
}