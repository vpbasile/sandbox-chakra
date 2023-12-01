import { Box, Text, Center, useColorModeValue, Stack } from "@chakra-ui/react";
import darkPhoto from '../ignores/sandDark60.png'
import lightPhoto from '../ignores/sandLight60.png'

export default function HomeComponent() {
    const text = `
    Remember to think mobile-first
    `
    // const photos = [
    //   <Box>Photo by <a href="https://unsplash.com/@jaysung?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jehyun Sung</a> on <a href="https://unsplash.com/photos/-Lc6azmFSk4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    //   </Box>,
    //   <Box>Photo by <a href="https://unsplash.com/@dongmingwei?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">mingwei dong</a> on <a href="https://unsplash.com/photos/irA2xa68xNA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    //   </Box>
    // ]

    const photoCredit = useColorModeValue(
        <Box>Photo by <a href="https://unsplash.com/@raychelsnr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Raychel Sanner</a> on <a href="https://unsplash.com/photos/YP2MNNId-Qs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></Box>,
        <Box>Photo by <a href="https://unsplash.com/@dongmingwei?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">mingwei dong</a> on <a href="https://unsplash.com/photos/irA2xa68xNA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  //   </Box>)

    // const holdThis = <Box>Photo by <a href="https://unsplash.com/@adrienolichon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Adrien Olichon</a> on <a href="https://unsplash.com/photos/VzRKG0piEp8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></Box>
    // const fonts = ["okuda", "mono"]
    // const fontType = typeof (fonts)
    const photo = useColorModeValue(lightPhoto, darkPhoto)

    return (<Center minH={'xl'}>
        <Stack bgImage={photo} bgSize={'cover'} maxH={'80vh'} w={'full'} justifyContent={'center'} alignContent={'center'}>
            <Center width={'full'} filter={'none'} h={'full'}>
            <Text>{text}</Text>
            </Center>
            <Center>{photoCredit}</Center>
        </Stack>
    </Center>)
}