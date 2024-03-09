import React from 'react'
import SectionContainer from './SectionContainer'
import { Flex, Heading } from '@chakra-ui/react'

type PageTitleProps = {
    title: string
}

function PageTitle(props: PageTitleProps) {
    const { title } = props

    return (
        <Flex 
            backgroundColor='rgba(0, 0, 0, 0.5)' 
            height='276px'
            alignItems='flex-end'
            paddingBottom='92px'
        >
            <SectionContainer>
                <Heading color='white' textDecorationLine='underline'>
                    {title}
                </Heading> 
            </SectionContainer>
        </Flex>
    )
}

export default React.memo(PageTitle)