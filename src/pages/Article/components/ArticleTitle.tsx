import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import { useArticle } from '../Article.hooks'
import { 
    Flex, 
    Heading, 
    Skeleton, 
} from '@chakra-ui/react'

function ArticleTitle() {
    const article = useArticle()

    return (
        <Flex 
            backgroundColor='rgba(0, 0, 0, 0.5)' 
            minHeight='276px'
            alignItems='flex-end'
            paddingY='92px'
        >
            <SectionContainer>
                {article?.isFetching
                    ?   <Skeleton height='43.2px' width='129.6px' />
                    :   <Heading color='white' textDecorationLine='underline'>
                            {article?.data?.title}
                        </Heading>   
                }
            </SectionContainer>
        </Flex>
    )
}

export default React.memo(ArticleTitle)