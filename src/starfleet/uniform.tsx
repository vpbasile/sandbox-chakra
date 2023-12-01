import { Box, Card, CardBody, CardFooter, CardHeader, Flex, Text, Image, Spacer, useColorModeValue } from "@chakra-ui/react";
import { deptType, deptMap, rankMap, rankType, hugeSize, pipSize, spacerSize } from "./constants";

type propsType = {
    name: string;
    department: string;
    rankSelector: string;
};

export default function Uniform(props: propsType) {

    // Determine the uniform color
    const deptInfo: deptType = (deptMap.get(props.department) as deptType)
    const uniformColor = deptInfo.color

    // Build the pips array
    const rankInfo = (rankMap.get(props.rankSelector) as rankType);
    let rankBurn = rankInfo.insignia
    const pipsArray = [<Box key={'placeholder'} w={spacerSize} h={pipSize}></Box>]
    while (rankBurn >= 1) {
        pipsArray.push(<Image src="/img/pip-full.svg" w={pipSize} m={1} key={rankBurn--} />)
    }
    if (rankBurn > 0) { pipsArray.push(<Image src="/img/pip-half.svg" w={pipSize} m={1} key={rankBurn} />) }

    // Cut shadow
    const bgColor = useColorModeValue('white', 'black')
    const fgColor = useColorModeValue('black', 'starfleet.gold')
    const cutGlow = `-0.1em 0.1em .2em white, 0.1em -0.1em .2em white, -0.1em -0.1em .2em white, 0.1em 0.1em .2em white`


    return (
        <Card bg={bgColor} id={props.name} w={hugeSize} p={8} color={fgColor}>
            <CardHeader id="top" bg={bgColor} p={'xl'} borderTopRadius={'2xl'}>
                <Text>{rankInfo.rankName + " " + props.name}</Text>
            </CardHeader>
            <CardBody>
                <Box boxShadow={cutGlow}>
                    <Box id="top" bg={'black'} borderBottom={'10px solid white'} p={'xl'}>
                        {<Flex dir="row" p={5}>
                            {pipsArray}
                        </Flex>}
                    </Box>
                    <Box bg={uniformColor} p={5} minH={hugeSize}>
                        <Flex id="badgeRow" alignContent={'right'} w={'full'}>
                            <Spacer id="" />
                            <Image id="comBadge" src="/img/badge-simple.svg" />
                        </Flex>
                        <Flex id="torsoSpacer"
                        // w={'full'} h={bigSize}
                        />
                    </Box>
                </Box>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>)
}