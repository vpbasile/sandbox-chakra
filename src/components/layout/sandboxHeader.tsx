import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeButton from "../helpers/colorModeButton";
import { routeType } from "../typeRoute";
// import { useState } from "react";

export default function Header(props: { routesList: routeType[] }) {

    const routesList = props.routesList
    let keyGen = 0;

    return (<Box display={{"sm":"flex"}} id="header" borderBottom={`2px`} marginBottom={'xl'} w={'full'} p={5}>

        <Image src="/img/logo.svg" h={10} p={1} />
        <Heading color={'blue.500'} flex={3} as={'h1'} p={'xl'} textShadow={2}><>Sandbox</></Heading>
        <Spacer />
        {(<Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Choose a module</MenuButton>
            <ColorModeButton />
            <MenuList>
                {routesList.map((route) => (
                    <MenuItem key={'navSelect' + keyGen++} value={route.path}>
                        <Link to={route.path}>{route.displayName}</Link>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>)}
    </Box >)
}