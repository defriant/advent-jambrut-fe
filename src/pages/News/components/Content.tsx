import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import PanelEmpty from '../../../components/PanelEmpty'
import NewsItem from '../../Home/components/NewsItem'
import NewsSkeleton from './NewsSkeleton'
import { useNews } from '../News.hooks'
import { 
    Box, 
    Grid, 
    GridItem, 
} from '@chakra-ui/react'
import SectionTitle from '../../../components/SectionTitle'

function Content() {
    const news = useNews()

    return (
        <Box
            paddingY='2rem'
            backgroundColor='white'
            minHeight='100vh'
            paddingTop='124px'
        >
            <SectionTitle title='News' />
            <Box height='3rem' />
            <SectionContainer>
                {news?.data?.length <= 0
                    ?   <PanelEmpty message='Empty Data' />
                    :   <Grid
                            gridGap='2rem'
                            gridTemplateColumns={{
                                base: 'repeat(auto-fill, minmax(250px, 1fr))',
                                lg: 'repeat(3, 1fr)',
                            }}
                        >
                            {news?.isFetching
                                ? [...Array(4)]?.map((_, index: number) => {
                                    return (
                                        <GridItem key={index}>
                                            <NewsSkeleton />
                                        </GridItem>
                                    )
                                })
                                : news?.isSuccess
                                ? news?.data?.map((news: any, index: number) => {
                                        return (
                                            <GridItem key={index}>
                                                <NewsItem
                                                    image={news?.image}
                                                    content={news?.content}
                                                    title={news?.title}
                                                    id={news?.id}
                                                />
                                            </GridItem>
                                        )
                                    })
                                : null}
                        </Grid>
                }
            </SectionContainer>
        </Box>
    )
}

export default React.memo(Content)
