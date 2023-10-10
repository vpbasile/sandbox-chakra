import { useColorModeValue } from "@chakra-ui/react"

export const bgColor = useColorModeValue('white', 'black')
export const fgColor = useColorModeValue('black','white')
export const styles = {
    cutShadow: `-0.1em 0.1em .2em ${bgColor}, 0.1em -0.1em .2em ${bgColor}, -0.1em -0.1em .2em ${bgColor}, 0.1em 0.1em .2em ${bgColor}`
}