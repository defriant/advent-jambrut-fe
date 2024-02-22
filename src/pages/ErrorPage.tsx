import { Divider, Flex, Text } from '@chakra-ui/react'

type TErrorPage = {
    code?: string
    message: string
    width?: string
    height?: string
}

function ErrorPage({ code, message, width = 'max-content', height = '80px' }: TErrorPage) {
    return (
        <>
            <Flex
                w={width}
                h={height}
                justify='center'
                align='center'
                gap='1.5rem'
                direction={{ base: 'column', sm: 'row' }}
            >
                {code && (
                    <>
                        <Text
                            fontSize='2xl'
                            letterSpacing='2px'
                            color='text-lighter'
                        >
                            {code}
                        </Text>
                        <Divider
                            orientation='vertical'
                            h='40px'
                            display={{ base: 'none', sm: 'block' }}
                        />
                    </>
                )}
                <Text
                    fontSize='2xl'
                    letterSpacing='2px'
                    color='text-lighter'
                >
                    {message}
                </Text>
            </Flex>
        </>
    )
}

export default ErrorPage
