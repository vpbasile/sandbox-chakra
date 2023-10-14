import { defineStyle, extendTheme } from "@chakra-ui/react";
import nebula from "/img/bubbleNebula.jpg"

// const colorModeConfig: ThemeConfig = {
//     initialColorMode: 'dark',
//     useSystemColorMode: false,
// }

export const colorPallette = defineStyle({
    green: {
        bright: "hsl(120, 100%, 75%)",
        glass: "hsla(169, 60%, 5%, 0.80)"
    },
    cyan: "hsl(199, 63%, 47%)",
    purple: {
        bright: "hsl(255, 84%, 85%)",
        dark: "hsl(284, 19%, 15%, 0.8)",
    },
    gold: "hsl(43, 98%, 64%)",
    pink: "hsl(291, 84%, 85%)",
    blue: {
        light: "hsl(199, 63%, 78%)",
    }
})

const shadows = defineStyle({
    purpleShadow: "-5px -5px 15px hsl(247, 44%, 35%)",
    goldShadow: "-5px -5px 30px hsl(43, 98%, 64%) inset",
    goldShadowSmall: "-1px -1px 15px hsl(43, 98%, 64%) inset",
    cyanShadow: "5px 5px 25px hsl(199, 63%, 47%)",
})

// <> Pack up all those definitions and export them
const nebulaTheme = extendTheme({
    // colorModeConfig,
    colorPallette,
    shadows,
    styles: {
        global: {
            body: { bgImage: nebula },
            a: {
                color: colorPallette.green.bright,
                fontWeight: 'bold',
                textTransform: 'uppercase',
            }
        }
    },
})

export default nebulaTheme