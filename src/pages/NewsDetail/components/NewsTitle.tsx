import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import { useNewsDetail } from '../NewsDetail.hooks'
import { 
    Flex, 
    Heading, 
    Skeleton, 
} from '@chakra-ui/react'

function NewsTitle() {
    const news = useNewsDetail()

    return (
        <Flex 
            backgroundColor='rgba(0, 0, 0, 0.5)' 
            height='276px'
            alignItems='flex-end'
            paddingBottom='92px'
        >
            <SectionContainer>
                {news?.isFetching
                    ?   <Skeleton height='43.2px' width='129.6px' />
                    :   <Heading color='white' textDecorationLine='underline' width='max-content'>
                            {news?.data?.title}
                        </Heading>   
                }
            </SectionContainer>
        </Flex>
    )
}

export default React.memo(NewsTitle)