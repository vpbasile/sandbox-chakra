import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { myRouteDef } from './typeRoute';
import { HamburgerIcon } from '@chakra-ui/icons';
export default function Nav(props: { routesList: myRouteDef[] }) {

    const routesList = props.routesList

    let keyGen = 0;

    return (<Menu>
        <MenuButton as={IconButton} aria-label='Nav Menu' icon={<HamburgerIcon />}>Open menu</MenuButton>
        <MenuList>
            <MenuItem key={'navButtonHome'}><Link to={'/sandbox-chakra'}>0.Home</Link></MenuItem>
            {routesList.map((route) => {
                return <MenuItem key={'navButton' + ++keyGen} value={keyGen}>
                    <NavLink to={route.path}>{route.key}.{route.navText}</NavLink>
                </MenuItem>
            })}
        </MenuList>
    </Menu>)
}