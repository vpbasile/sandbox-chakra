import { Box, Heading, Text } from '@chakra-ui/react';
export default function Home() {
return (<Box>
    <Heading as={'h2'}>Home</Heading>
    <Text p={'xl'}>The nav should use a menu instead of buttons.  Make a state to hold the index of the selected choice.</Text>
</Box>)
}