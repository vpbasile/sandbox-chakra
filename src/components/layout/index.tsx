import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { routeType } from '../typeRoute';
import SandboxFooter from './sandboxFooter';
import SandboxHeader from './sandboxHeader';

export default function Layout(props: { routesList: routeType[], showLabels: boolean }) {
    const routesList = props.routesList;
    return (<>
        <SandboxHeader routesList={routesList} />
        <Box id='mainBody' p={{ base: 1, sm: 9 }}>
            {/* This is where the children will be rendered */}
            <Outlet />
        </Box>
        <SandboxFooter />
    </>)
}