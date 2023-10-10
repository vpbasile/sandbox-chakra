import { useDisclosure, Button, Collapse, Box } from "@chakra-ui/react"
import LoremIpsum from "react-lorem-ipsum"

export default function CollapseEx() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
            <Button onClick={onToggle}>Click Me</Button>
            <Collapse in={isOpen} animateOpacity>
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
            </Collapse>
        </>
    )
}