import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, Center, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import ColorModeButton from "../components/helpers/colorModeButton";
import { myRouteDef } from "./typeRoute";

// import { useState } from "react";

export default function Header(props: { routesList: myRouteDef[], hideLabels: () => void }) {

    const routesList = props.routesList;
    let keyGen = 0;

    return (<Stack id="header" borderBottom={`2px`} marginBottom={'xl'} w={'full'}>
        <Center w={'full'}>
            <Heading color={'blue.500'} flex={3} as={'h1'} p={'xl'} >sandbox-chakra</Heading>
        </Center>
        <Center w={'full'}>
            <Text p={'xl'}>Remember to think mobile-first.</Text>
        </Center>
        <Center w={'full'}>
            <ButtonGroup isAttached p={5}>
                <Menu>
                    <MenuButton as={IconButton} aria-label='Nav Menu' icon={<HamburgerIcon />}>Open menu</MenuButton>
                    <MenuList>
                        <MenuItem key={'navButtonHome'}><NavLink to={'/sandbox-chakra'}>0.Home</NavLink></MenuItem>
                        {routesList.map((route) => {
                            return <MenuItem key={'navButton' + ++keyGen} value={keyGen}>
                                <NavLink to={route.path}>{route.key}.{route.navText}</NavLink>
                            </MenuItem>;
                        })}
                    </MenuList>
                </Menu>
                <ColorModeButton />
                <Button onClick={props.hideLabels}>Hide UI</Button>
            </ButtonGroup>
        </Center>
    </Stack >)
}