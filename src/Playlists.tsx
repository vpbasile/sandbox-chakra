import { Box, Heading, Link } from '@chakra-ui/react';
import { username } from 'react-lorem-ipsum';
export default function Playlists() {

    // const listID = 'PLtIQIcFyCDE_NEuu8JG2wsrfBLpgWQlcy'
    const userName = '@vincentbasile9022'
    const channelId = 'UCUaHE1tMuSvFgDW5ZSuIpTA'
    const url = `https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?part=id&forUsername=${username}`



    return (<Box>
        <Heading as={'h2'}>Playlists</Heading>
        <Box>
            <Link href={url} isExternal>
                {userName}
            </Link>

        </Box>
    </Box>)
}