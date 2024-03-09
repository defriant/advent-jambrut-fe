import { Center, Image, Stack, Text } from '@chakra-ui/react'
import { IMG_EMPTY } from '../assets'

type TPanelEmpty = {
    message: string
}

function PanelEmpty({ message }: TPanelEmpty) {
    return (
        <Center
            height='300px'
            opacity='.7'
        >
            <Stack
                align='center'
                spacing='1rem'
            >
                <Image
                    src={IMG_EMPTY}
                    w='100px'
                />
                <Text
                    fontWeight='semibold'
                    fontSize='sm'
                >
                    {message}
                </Text>
            </Stack>
        </Center>
    )
}

export default PanelEmpty
