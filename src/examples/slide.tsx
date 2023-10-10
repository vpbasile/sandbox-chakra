import { useDisclosure, Button, Slide, Box } from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"

export default function SlideExample() {

    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
            <Button onClick={onToggle}>Click Me</Button>
            <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    p='40px'
                    color='white'
                    mt='4'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                >
                    <LoremIpsum />
                </Box>
            </Slide>
        </>
    )

}