import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import { useArticle } from '../Article.hooks'
import { Link } from 'react-router-dom'
import { 
    Box, 
    Flex, 
    SkeletonText, 
    Stack, 
    Text, 
} from '@chakra-ui/react'

function ArticleContent() {
    const article = useArticle()

    return (
        <Box>
            <SectionContainer>
                {article?.isFetching
                    ?   <SkeletonText 
                            noOfLines={4} 
                            spacing='1' 
                            skeletonHeight='24px' 
                        />
                    :   <Stack spacing='2rem'>
                            <Text textAlign='justify' whiteSpace='pre-line'>
                                {article?.data?.description}
                            </Text>
                            <Flex gap='4px'>
                                <Text fontSize='13px'>Sumber:</Text>
                                <Text 
                                    as={Link} 
                                    target='_blank' 
                                    to={article?.data?.source}
                                    fontSize='13px'
                                    color='blue.400'
                                >{article?.data?.source}</Text>
                            </Flex>
                        </Stack>
                }
            </SectionContainer>
        </Box>
    )
}

export default React.memo(ArticleContent)