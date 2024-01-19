import { Box, Container } from '@chakra-ui/react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { routeType } from '../AppTypes';
import SandboxFooter from './sandboxFooter';
import SandboxHeader from './sandboxHeader';

export default function Layout(props: { routesList: routeType[] }) {
    const routesList = props.routesList;
    // ---------------------------------------------
    // <><> Set this to false to hide the header and footer
    // ---------------------------------------------
    const [showLabels, SETshowLabels] = useState(true);
    const hideLables = () => { SETshowLabels(false) }

    return (<Container id='layoutWrapper'>
        {showLabels && <SandboxHeader routesList={routesList} hideLabels={hideLables} />}
        <Box id='mainBody' p={9}>
            {/* This is where the children will be rendered */}
            <Outlet />
        </Box>
        {showLabels && <SandboxFooter />}
    </Container>)
}