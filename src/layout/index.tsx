import { Box, Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import SandboxFooter from './sandboxFooter'
import SandboxHeader from './sandboxHeader'
import { myRouteDef } from './typeRoute';
import { useState } from 'react';



export default function Layout(props: { routesList: myRouteDef[] }) {
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