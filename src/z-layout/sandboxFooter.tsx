import { LinkIcon } from "@chakra-ui/icons";
import { Box, Button, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";

export default function Footer() {
    return (<Box id="footer" textAlign={'right'} borderTop={`2px`} marginTop={'xl'}>
        <Menu>
            <MenuButton as={Button} leftIcon={<LinkIcon />}>Links</MenuButton>
            <MenuList>
                <MenuItem><Link isExternal href="https://chakra-ui.com/">ChakraUI</Link></MenuItem>
                <MenuItem><Link isExternal href="https://chakra-ui.com/docs/components/icon/usage#all-icons">Icon Reference</Link></MenuItem>
                <MenuItem><Link isExternal href="https://chakra-ui-cheatsheet.vercel.app/">Cheat Sheet</Link></MenuItem>
                <MenuItem><Link isExternal href="https://play.chakra-ui.com/playground">Playground</Link></MenuItem>
                <MenuItem><Link isExternal href="https://github.com/vpbasile/sandbox-chakra">Reporsitory on Github</Link></MenuItem>
                <MenuItem><Link isExternal href="https://vpbasile.github.io/sandbox-chakra/">Live version on Github Pages</Link></MenuItem>
            </MenuList>
        </Menu>
        <Text>sandbox-chakra</Text>
    </Box>)
}