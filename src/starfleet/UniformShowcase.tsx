import { Input, RadioGroup, Radio, Box, Text, SimpleGrid, Card, CardBody, CardFooter, CardHeader, Heading, Stack, useColorModeValue, Button } from "@chakra-ui/react";
import { Department, Officer, deptMap, hugeSize, rankMap } from "./constants";
import Uniform from "./uniform";
import { useState } from "react";

export default function UniformShowcase() {
    // ---------------------------------------------
    // Initialize values
    // ---------------------------------------------
    const initialOfficers: Officer[] = [
        { name: "Bradward Boimler", department: "Command", rankDesignation: "C-02" },
        { name: "Jadzia Dax", department: "Science", rankDesignation: "C-04" },
        { name: "Geordi LaForge", department: "Operations", rankDesignation: "C-04" },
    ]
    const [officerList, SETofficerList] = useState(initialOfficers)
    const [pickedName, setName] = useState<string>("Boothby")
    const initialDept = "Command";
    const [pickedDept, setDept] = useState<Department>(initialDept)
    const initialRank = "C-01";
    const [pickedRank, setRank] = useState(initialRank);

    const bgColor = useColorModeValue('white', 'black')
    const fgColor = useColorModeValue('black','starfleet.gold')


    function replicateUniform() {
        const tempOfficers = [...officerList]
        tempOfficers.unshift({ name: pickedName, department: pickedDept, rankDesignation: pickedRank })
        SETofficerList(tempOfficers)
        setName(""); setDept(initialDept); setRank(initialRank);
    }

    function wrapper(arg0: string) {
        setDept(arg0 as Department)
    }

    return (
        <Box id="uniformShowcase" p={3}>
            <Box id="uniformForm" p={3}>
            </Box>
            <SimpleGrid id="uniformExample" spacing={3} templateColumns={`repeat(auto-fill, minmax(${hugeSize}, 1fr))`}>
                <Card id="zzform" bg={bgColor} w={hugeSize} p={8} color={fgColor}>
                    <CardHeader id="top" bg={'black'} borderBottom={'10px solid white'} p={'xl'} borderTopRadius={'2xl'}>
                        {/* <Image src="/img/pip-half.svg" w={pipSize} m={1} /> */}
                        <Heading as={'h2'}>Create New</Heading>
                    </CardHeader>
                    <CardBody p={5} minH={hugeSize} borderBottomRadius={'2xl'}>
                        <Stack id={"someID"} spacing='4' p={5} minH={hugeSize} borderBottomRadius={'2xl'}>
                            <Box id="nameEntry" p={3}>
                                <Text>Officer Name:</Text>
                                <Input defaultValue={pickedName} onChange={e => setName(e.target.value)} />
                            </Box>
                            <Box id="deptSelect">
                                <RadioGroup onChange={wrapper}>
                                    {Array.from(deptMap.entries()).map(([deptDesignator]) => {
                                        const thisColor = deptMap.get(deptDesignator)?.color
                                        return <Radio bgColor={thisColor} textColor={thisColor} p={1} key={deptDesignator} value={deptDesignator}>{deptDesignator}</Radio>;
                                    })}
                                </RadioGroup>
                            </Box>
                            <Box id="rankSelect">
                                <RadioGroup onChange={setRank}>
                                    {Array.from(rankMap.entries()).map(([rankDesignator, rankDetails]) => <Radio p={1} key={rankDesignator} value={rankDesignator}>{rankDetails.rankName}</Radio>)}
                                </RadioGroup>
                            </Box>
                            <Button onClick={replicateUniform}>Replicate Uniform</Button>
                        </Stack>
                    </CardBody>
                    <CardFooter>

                    </CardFooter>
                </Card>
                <Uniform name={pickedName} department={pickedDept} rankSelector={pickedRank} />
                {officerList.map(eachOfficer => <Uniform key={eachOfficer.name} name={eachOfficer.name} department={eachOfficer.department} rankSelector={eachOfficer.rankDesignation} />)}
            </SimpleGrid>
        </Box>
    )
}