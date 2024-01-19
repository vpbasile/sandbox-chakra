import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Link, Menu, MenuButton, MenuItem, MenuList, VStack } from "@chakra-ui/react";
import ColorModeButton from "./components/helpers/colorModeButton";
import { routeType } from "./components/typeRoute";
// import { useState } from "react";

export default function Header(props: { foregroundColor: string, routes: routeType[] }) {
    const routes = props.routes;
    const foregroundColor = props.foregroundColor;

    let keyGen = 0;

    return (<Flex id="header" borderBottom={`2px solid ${foregroundColor}`} marginBottom={'xl'}>
        <VStack>
            <Heading flex={3} as={'h1'}><Link href="/">ChakraUI Sandbox</Link></Heading>
            <ColorModeButton />
            {<Menu>
                <MenuButton as={Button} colorScheme='green' leftIcon={<ChevronLeftIcon />} rightIcon={<ChevronRightIcon />}>
                    Choose a module
                </MenuButton>
                <MenuList>
                    {routes.map(eachRoute => {
                        const path = eachRoute.path;
                        return <MenuItem key={keyGen++}><Link href={path}>{eachRoute.displayName}</Link></MenuItem>;
                    })}
                    <MenuItem>My Account</MenuItem>
                </MenuList>
            </Menu>}
        </VStack>
    </Flex >)
}