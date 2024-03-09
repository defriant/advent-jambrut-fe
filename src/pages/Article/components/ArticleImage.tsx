import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import { useArticle } from '../Article.hooks'
import { 
    Box, 
    Image,
    Skeleton, 
} from '@chakra-ui/react'

function ArticleImage() {
    const article = useArticle()

    return (
        <Box>
            <SectionContainer>
                {article?.isFetching
                    ?   <Skeleton
                            height='480px'
                            width='100%'
                            borderRadius='8px'
                        />
                    :   <Image
                            src={article?.data?.image}
                            width='100%'
                            borderRadius='8px'
                        />
                }
            </SectionContainer>
        </Box>
    )
}

export default React.memo(ArticleImage)