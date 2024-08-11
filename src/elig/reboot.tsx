import { ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { segmentDelimiter } from "./helpers";
import { messageData } from "./xample_data/X279-error-response-from-payer-to-clinic-not-eligible-for-inquiries-with-payer";

export const Reboot = () => {
    const displayStuff = messageData.split(segmentDelimiter).map((segment, index) => {
        return <Flex border={'red'} key={index}>
            <Text>Segment {index}</Text>
            <ArrowRightIcon  />
            <Text>{segment}</Text>
            </Flex>
    })
    return <>
        {displayStuff}
    </>
}