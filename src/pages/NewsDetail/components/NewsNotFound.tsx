import React from 'react'
import { Center, Heading } from '@chakra-ui/react'

function NewsNotFound() {
    return (
        <Center minH='100vh' backgroundColor='rgba(0, 0, 0, 0.5)' >
            <Heading color='white'>404 | News Not Found</Heading>
        </Center>
    )
}

export default React.memo(NewsNotFound)