import { Heading, Text, useColorModeValue, useDisclosure, Box, Collapse, Stack, Link } from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"

export default function ExampleCutShadow() {
    // Calculation for styles
    const bgColor = useColorModeValue('white', 'black')
    const cutShadow = `-0.1em 0.1em .2em ${bgColor}, 0.1em -0.1em .2em ${bgColor}, -0.1em -0.1em .2em ${bgColor}, 0.1em 0.1em .2em ${bgColor}`
    const { isOpen, onToggle } = useDisclosure()

    // Adjustments

    // Other
    const saying = "The cut-shadow can help make text more readable when placed against a noisy background image."

    return (<>
        <Heading as={'h2'} textShadow={cutShadow} onClick={onToggle}>Cutshadow example</Heading>

        <Collapse in={isOpen} animateOpacity transition={{exit: {delay: 1}, enter: {duration: 0.5}}}>
            <Link href="https://chakra-ui.com/docs/components/transitions/usage#collapse-transition">Collapse example</Link>
            <Box
                color='white'
                mt='4'
                rounded='md'
                shadow={cutShadow} p={5} w={'0.5wv'}>
            </Box>
            <Stack textShadow={cutShadow} p={9} border={"solid"} bgImage={'/public/gl.jpg'} backgroundSize={'100%'} backgroundPosition={"center"}>
                <Text fontSize={'5xl'}>{saying}</Text>
                <Text>{saying}  Make sure to test before using: some images may still not work with</Text>
                <LoremIpsum />
            </Stack>
            <Stack fontSize={'l'} textShadow={cutShadow} p={9} border={"solid"} bgImage={'/public/dc-retro.jpg'} backgroundSize={'100%'} backgroundPosition={"center"}>
                <Text>{saying}</Text>
                <LoremIpsum />

            </Stack>
        </Collapse>
    </>)
}