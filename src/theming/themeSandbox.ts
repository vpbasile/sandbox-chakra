import { ThemeConfig, extendTheme, withDefaultColorScheme, withDefaultVariant } from '@chakra-ui/react'
// import darkbg from '../../ignores/adrien-olichon-VzRKG0piEp8-unsplash.jpg'
// import lightbg from '../../ignores/raychel-sanner-YP2MNNId-Qs-unsplash.jpg'


// Define your color mode config
const colorModeConfig: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

// extend the theme
const sandboxTheme = extendTheme({ // Specifics
    fonts: {
        heading: 'Monofonto Regular',
        body: 'Droid sans Mono',
    },
    colors: {
        starfleet: {
            command: "#330000",
            operations: "#332700",
            science: "#002833",
            indeterminite: "#161a16",
            gold: "#c8ab37ff"
        },
    },
    styles: {
        global: {
            body: { bgSize: "100vw" },
            a: {
                fontWeight: 'bold',
                textTransform: 'uppercase',
            }
        }
    },
    semanticTokens: {
        colors: {
            text: {
                default: "green.500",
                _dark: "blue.500"
            },
            card: {
                default: "gray.50",
                _dark: "gray.700"
            }
        },
        shadows: {
            card: {
                default: "md",
                _dark: "none"
            }
        },
        radii: {
            card: "lg"
        }
    },
},
    withDefaultColorScheme({ colorScheme: 'gray', components: ['Button'], })
    , withDefaultVariant({ variant: 'outline', components: ['Button'] })
    , colorModeConfig
)

export default sandboxTheme