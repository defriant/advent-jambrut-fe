import { useEffect } from 'react'
import NewsImage from './components/NewsImage'
import NewsContent from './components/NewsContent'
import NewsNotFound from './components/NewsNotFound'
import { useNewsDetail } from './NewsDetail.hooks'
import { Heading, Stack } from '@chakra-ui/react'
import SectionContainer from '../../components/SectionContainer'

function NewsDetail() {
    const newsDetail = useNewsDetail()

    useEffect(() => {
        newsDetail?.refetch()
    }, [])

    if (newsDetail?.isError) return <NewsNotFound />

    return (
        <>
            <Stack
                minHeight='100vh'
                spacing='0px'
            >
                <Stack
                    backgroundColor='white'
                    paddingY='2rem'
                    flex='1'
                    gap='2rem'
                    paddingTop='186px'
                >
                    <SectionContainer>
                        <Heading textAlign='center' width='100%'>
                            {newsDetail?.data?.title}
                        </Heading>  
                    </SectionContainer>
                    <NewsImage />
                    <NewsContent />
                </Stack>
            </Stack>
        </>
    )
}

export default NewsDetail
