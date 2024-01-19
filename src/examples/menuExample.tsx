import { Box, Text, Image, Flex, Heading, List, ListItem, Center, useColorModeValue, Stack, Spacer } from "@chakra-ui/react";

export default function MenuExample() {

    let keyGen = 0;
    function nextKey(): number { return ++keyGen }
    // <> Formatting
    const fgColor = useColorModeValue('black', 'white')
    const bgColor = useColorModeValue('white', 'black')
    const borderSM = '1px solid ' + fgColor;
    const borderMD = '2px solid  ' + fgColor;
    const borderLG = '5px solid ' + fgColor;
    const padSize = '5';

    // <> Schema
    type item = { title: string, description?: string, price: number }
    type section = {
        title: string;
        notes?: string;
        items: item[];
    };

    const data: section[] = [
        {
            title: "SALAD", notes: "Add-ins: Grilled Chicken..4/Blackened Salmon..6/Shaved Steak..4/Hardboiled Egg..1.50", items: [
                { title: "HOUSE SALAD", description: "spring mix / grape tomato / carrot / cucumber / red onion / banana pepper", price: 8.50 },
                { title: "pittsburgh salad", description: "spring mix / french fries / green pepper / red onion / grape tomato / cheddar cheese", price: 9 }
            ]
        },
        {
            title: "SANDWICH", notes: "Make it a combo with a fountain drink and chips or fries..3", items: [
                { title: "fried chicken", description: "fried chicken / pickle / tomato / onion / mayo", price: 9.5 },
                { title: "reuben", description: "marble rye / corned beef / sauerkraut / swiss cheese / thousand island dressing", price: 10 },
                { title: "rachel", description: "grilled turkey / cole slaw / swiss cheese / thousand island dressing ", price: 9.50 },
                { title: "fish", description: "deep fried alaskan pollock / tartar sauce", price: 12.50 },
                // { title: "", description: "", price: ""},
                // { title: "", description: "", price: ""},
                // { title: "", description: "", price: ""},
                // { title: "", description: "", price: ""},
                // { title: "", description: "", price: ""},

            ]
        },
        { title: "WRAPS", items: [] }
    ]

    //If there are exactly three items show three columns.  Otherwise, show two columns.

    // <> Calculate content
    function sectionJSX(thisSection: section) {
        const title = thisSection.title;
        const notes = thisSection.notes;
        return (<Stack id="section01">
            <Flex>
                <Spacer borderBottom={borderLG} />
                <Heading id="section01-title" as={'h2'} px={3}>{title}</Heading>
                <Spacer borderBottom={borderLG} />
            </Flex>
            <Center id="section01-notes" border={borderSM}>{notes}</Center>
            <Flex id="section01-contents">
                {thisSection.items.map((thisItem) => <Box key={nextKey()}>
                    <Flex>
                        <Heading as={'h3'}>{thisItem.title}</Heading>
                        <Spacer />
                        <Heading as={'h3'}>..{thisItem.price}</Heading>
                    </Flex>
                    <Text>{thisItem.description}</Text>
                </Box>
                )
                }</Flex>
        </Stack>)
    }

    return (
        <Box textTransform={'uppercase'}>
            <Flex w={'100%'}>
                <Heading as={'h2'}>Remaining</Heading>
                <List>
                    <ListItem>Header:Monofonto Regular</ListItem>
                    <ListItem>Body:Droid sans Mono</ListItem>
                    <ListItem>Dyslexia coloration</ListItem>
                    <ListItem></ListItem>
                </List>
            </Flex>
            <Flex>
                <Box w={'50%'}>
                    <Image src="../ignores/exampleMenu.jpeg" />
                </Box>
                <Box w={'50%'} id="menuPageContainer">
                    <Box id="menuPageBackground" bg={bgColor} color={fgColor} w={724} h={1024} p={padSize}>
                        <Box id="menuPageBorder" w={'full'} h={'full'} border={borderMD} p={padSize}>
                            <Flex id="header" w={'full'}>
                                <Box id="header-left">
                                    <Heading as='h1'>LUNCH MENU</Heading>
                                    <Text>Served M-F 11am-3pm</Text>
                                </Box>
                                <Flex id="header-right">
                                    <Text>888-888-8888</Text>
                                    <Center w={'100px'} h={'100px'}>
                                        Logo
                                    </Center>
                                </Flex>
                            </Flex>
                            <Box id="body" w={'full'}>
                                {data.map((eachSection) => { return sectionJSX(eachSection) })}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>)
}