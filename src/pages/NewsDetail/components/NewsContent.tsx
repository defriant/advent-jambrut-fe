import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import { useNewsDetail } from '../NewsDetail.hooks'
import { 
    Box, 
    SkeletonText, 
    Stack, 
    Text, 
} from '@chakra-ui/react'

function NewsContent() {
    const newDetail = useNewsDetail()

    return (
        <Box>
            <SectionContainer>
                {newDetail?.isFetching
                    ?   <SkeletonText 
                            noOfLines={4} 
                            spacing='1' 
                            skeletonHeight='24px' 
                        />
                    :   <Stack spacing='2rem'>
                            <Text textAlign='justify' whiteSpace='pre-line'>
                                {newDetail?.data?.content}
                            </Text>
                        </Stack>
                }
            </SectionContainer>
        </Box>
    )
}

export default React.memo(NewsContent)