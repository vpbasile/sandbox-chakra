import { Button, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ColorModeButton from '../helper/colorModeButton';
import { myRouteDef } from './typeRoute';
import { ReactNode } from 'react';
export default function Nav(props: { routesList: myRouteDef[], children: ReactNode }) {

    const routesList = props.routesList

    let keyGen = 0;

    return (<ButtonGroup isAttached p={5}>
        <ColorModeButton />
        <Button key={'navButtonHome'}><Link to={'/sandbox-chakra'}>0.Home</Link></Button>
        {routesList.map((route) => {
            return <Button key={'navButton' + keyGen++}>
                <Link to={route.path}>{route.key}.{route.buttonText}</Link>
            </Button>
        })}
        {props.children}
    </ButtonGroup >)
}