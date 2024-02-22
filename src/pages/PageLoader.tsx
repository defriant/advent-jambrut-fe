import { Center, Spinner, Stack, Text } from '@chakra-ui/react'

type TPageLoader = {
    message?: string
}

function PageLoader({ message }: TPageLoader) {
    return (
        <Center h='100vh'>
            <Stack
                spacing='2rem'
                justify='center'
                align='center'
            >
                <Spinner
                    w='75px'
                    h='75px'
                    color='primary'
                />
                {message && (
                    <Text
                        fontSize='sm'
                        fontWeight='semibold'
                    >
                        {message}
                    </Text>
                )}
            </Stack>
        </Center>
    )
}

export default PageLoader
