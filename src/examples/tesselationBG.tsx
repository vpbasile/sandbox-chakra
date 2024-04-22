import { Box, Center, Flex, Heading, Radio, RadioGroup, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Text } from "@chakra-ui/react";
// import dc from "../../ignores/dc-retro.jpg";
// import gl from "../../ignores/gl.jpg";
import sunBlue from "/img/sunTile/sunTileBlue.svg";
import sunFlower from "/img/sunTile/sunTileFlower.svg";
import sunGreen from "/img/sunTile/sunTileGreen.svg";
import sunHarlequin from "/img/sunTile/sunTileHarlequin.svg";

import { useState } from "react";
import ColorModeButton from "../helpers/colorModeButton";
import ExampleCutShadow from "./cutShadow";

export default function Tesselation() {

    const bgChoices: [string, { image: string }][] = [
        ["harlequin", { image: sunHarlequin }],
        ["sunFlower", { image: sunFlower }],
        ["blue", { image: sunBlue }],
        ["green", { image: sunGreen }],
        // ['Green Lantern', { image: gl }],
        // ["DC Comics", { image: dc }]
    ]

    const [bgSize, SETbgSize] = useState(100);
    const [chosenBG, chooseBG] = useState(bgChoices[0][1].image);


    const bgControls = <Box 
    bg="rgba(0, 0, 0, 0.3)" p={10} rounded={'2xl'}>
        <Slider aria-label='slider-ex-1' defaultValue={bgSize} onChange={SETbgSize} min={100} max={1260} step={10}>
            <SliderMark
                value={bgSize}
                fontSize={'2xl'}
                textAlign='center'
                bg="rgba(0, 0, 0, 0.3)"
                mt='-10'
                ml='-5'
                borderRadius={'md'}
            >
                {bgSize}px
            </SliderMark>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
        {<RadioGroup onChange={chooseBG} value={chosenBG}>
            <Text>Select Image</Text>
            <Stack id="radioChoices" direction='row'>
                {bgChoices.map((eachChoice) => {
                    const [X, Y] = eachChoice;
                    return <Radio key={Math.random()} value={Y.image}>{X}</Radio>;
                })}
            </Stack>
        </RadioGroup>}
        <ColorModeButton />
    </Box>

    const lorem = <Box>
        <Text decoration={'initial'} textIndent={'initial'}>The cut-shadow can help make text more readable when placed against a noisy background image, though it doesn't work very well when the text color is too prevalent in the image.</Text>
        <Text>Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam mollis vehicula, lacus augue maximus elementum purus. Praesent justo penatibus ipsum massa euismod non vehicula. Nunc himenaeos ligula interdum ac neque ullamcorper fermentum porta. Ligula tincidunt ex massa est vitae primis libero conubia. Efficitur netus dictumst nullam pulvinar augue faucibus. Sem elit pretium molestie blandit donec lorem. Natoque mi sodales laoreet, libero laoreet imperdiet blandit.</Text>
    </Box>

    return (<>
        <Heading as={'h2'}>Cut Shadow Testing</Heading>
        <Flex w={'full'}>
            <ExampleCutShadow bgImage={chosenBG} bgSize={bgSize}>
                <Flex  w={'full'}>{bgControls}</Flex>
                <Center minH={'500px'}>{lorem}</Center>
            </ExampleCutShadow>
        </Flex>
    </>
    )
}