import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { routeGroupList, routeType } from '../AppTypes';

let keyGen = 0;

export default function NavMenu(props: { routesList: routeType[] }) {
    const routesList = props.routesList;
    return ((<Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Choose a module</MenuButton>
        <MenuList>
            {routeGroupList.map((group) => {
                const groupRoutes = routesList.filter((route) => route.group === group);
                if (groupRoutes.length === 0) {
                    return null;
                }
                keyGen++;
                return (<MenuGroup key={keyGen} title={'---'+group+'---------'}>
                    {groupRoutes.map((route) => {
                        keyGen++;
                        return (<MenuItem key={keyGen} as={Link} to={route.path}>{route.displayName}</MenuItem>)
                    })}
                </MenuGroup>)
            })}
        </MenuList>
    </Menu>))
}
