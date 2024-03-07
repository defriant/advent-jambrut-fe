import React from 'react'
import { 
    Flex, 
    Heading, 
    Stack, 
    Text, 
} from '@chakra-ui/react'

type SectionTitleProps = {
    title: string
    description?: string
}

function SectionTitle(props: SectionTitleProps) {
    const { title, description } = props

    return (
        <Stack>
            <Flex 
                width='min-content'
                marginX='auto'
                borderBottomWidth='5px' 
                borderBottomColor='primary'
            >
                <Heading 
                    fontSize='55px' 
                    textAlign='center' 
                    fontWeight='700'
                >{title}</Heading>
            </Flex>
            {description
                ?   <Text fontSize='medium'>{description}</Text>
                :   null
            }
        </Stack>
    )
}

export default React.memo(SectionTitle)