import { InfoIcon } from "@chakra-ui/icons";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function ResponsiveExample() {

    const sampleText = "Green Lantern is the name of several superheroes appearing in American comic books published by DC Comics. They fight evil with the aid of rings that grant them a variety of extraordinary powers, all of which come from imagination, fearlessness, and the electromagnetic spectrum of emotional willpower. The characters are typically depicted as members of the Green Lantern Corps, an intergalactic law enforcement agency."

    return (
        <Box id="responsiveExample">
            <Box id="headingBox" display={{ md: "flex" }} w={'100%'}>
                <Heading as={'h2'}>Responsive</Heading>
            </Box>
            <Box id="infoBox" p={10} border={'1px solid blue'} bg={"blue.500"}>
            <Text><InfoIcon /> Resize the browser to see responsive changes.</Text>
            </Box>
            <Box id="coolStuff" p={4} display={{ md: "flex" }}>
                <Box flexShrink={0} w={['100%', null, '50%']}>
                    <Image
                        borderRadius="lg"
                        src="/public/gl.jpg"
                        alt="a silly image"
                    />
                    T</Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Text fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="sm"
                        letterSpacing="wide"
                        color="green.600">
                        Green Lantern
                    </Text>
                    <Text mt={2} color="gray.500">
                        {sampleText}
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}