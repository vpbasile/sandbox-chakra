import { LinkIcon } from "@chakra-ui/icons";
import { Box, Button, Link, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";

export default function Footer() {
    return (<Box id="footer" textAlign={'right'} borderTop={`2px`} marginTop={'xl'}>
        <Menu>
            <MenuButton as={Button} leftIcon={<LinkIcon />} rightIcon={<LinkIcon />}>External Links</MenuButton>
            <MenuList>
                <Button leftIcon={<LinkIcon />}><Link isExternal href="https://chakra-ui.com/">ChakraUI</Link></Button>
                <Button leftIcon={<LinkIcon />}><Link isExternal href="https://chakra-ui.com/docs/components/icon/usage#all-icons">Icon Reference</Link></Button>
                <Button leftIcon={<LinkIcon />}><Link isExternal href="https://chakra-ui-cheatsheet.vercel.app/">Cheat Sheet</Link></Button>
                <Button leftIcon={<LinkIcon />}><Link isExternal href="https://play.chakra-ui.com/playground">Playground</Link></Button>

            </MenuList>
        </Menu>
        <Text>sandbox-chakra</Text>
    </Box>)
}