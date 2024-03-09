import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import { useNewsDetail } from '../NewsDetail.hooks'
import {  
    Box, 
    Image,
    Skeleton, 
} from '@chakra-ui/react'

function NewsImage() {
    const news = useNewsDetail()

    return (
        <Box>
            <SectionContainer>
                {news?.isFetching
                    ?   <Skeleton 
                            height='480px' 
                            width='100%' 
                            borderRadius='8px'
                        />
                    :   <Image 
                            src={news?.data?.image} 
                            width='100%' 
                            borderRadius='8px'
                        />   
                }
            </SectionContainer>
        </Box>
    )
}

export default React.memo(NewsImage)