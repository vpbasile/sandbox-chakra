import { Heading, useColorModeValue, Box, Text } from "@chakra-ui/react"
import { ReactNode } from "react";

export default function ExampleCutShadow(props: { bgImage: string, bgSize: number, children?: ReactNode, colorOverride?: string }) {
    const bgImage = props.bgImage;
    const bgSize = props.bgSize;
    // Calculation for styles
    function cutShadow(color: string) { return (`-0.1em 0.1em .2em ${color}, 0.1em -0.1em .2em ${color}, -0.1em -0.1em .2em ${color}, 0.1em 0.1em .2em ${color}`) }
    let myCutShadow = cutShadow(useColorModeValue('white', 'black'))
    const colorOverride = props.colorOverride
    if (colorOverride) { myCutShadow = colorOverride }

    // Adjustments

    return (<>

        <Box
            mt='4' rounded='md' textShadow={myCutShadow} p={9} border={"solid"} bgImage={bgImage} bgSize={bgSize} bgRepeat={'repeat'}>
            <Heading as={'h2'} textShadow={myCutShadow}>Cut Shadow</Heading>
            {props.children}
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt necessitatibus nulla porro vero dolore rerum odit similique, quisquam quam minima voluptatem repellat quo amet quidem eligendi autem at aliquid. Dignissimos.</Text>

        </Box>
    </>)
}