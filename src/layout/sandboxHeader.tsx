import { Button, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Nav from "./Nav";
import { myRouteDef } from "./typeRoute";
// import { useState } from "react";

export default function Header(props: { routesList: myRouteDef[], hideLabels: () => void }) {
    return (<Flex id="header" borderBottom={`2px`} marginBottom={'xl'} w={'full'}>
        <Heading color={'blue.500'} flex={3} as={'h1'} p={'xl'} >sandbox-chakra</Heading>
        <Text p={'xl'}>Remember to think mobile-first.</Text>
        <Spacer />
        <Nav routesList={props.routesList}>
            <Button onClick={props.hideLabels}>Hide UI</Button>
        </Nav>
    </Flex >)
}