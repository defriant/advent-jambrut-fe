import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import ArticleItem from '../../Home/components/ArticleItem'
import ArticleSkeleton from './ArticleSkeleton'
import PanelEmpty from '../../../components/PanelEmpty'
import SectionTitle from '../../../components/SectionTitle'
import { useArticles } from '../Articles.hooks'
import { 
    Box, 
    Grid, 
    GridItem, 
} from '@chakra-ui/react'

function Content() {
    const articles = useArticles()

    return (
        <Box
            paddingY='2rem'
            backgroundColor='white'
            minHeight='100vh'
            paddingTop='124px'
        >
            <SectionTitle title='Articles' />
            <Box height='3rem' />
            <SectionContainer>
                {articles?.data?.length <= 0
                    ?   <PanelEmpty message='Empty data' />
                    :   <Grid
                            gridGap='2rem'
                            gridTemplateColumns={{
                                base: 'repeat(auto-fill, minmax(250px, 1fr))',
                                lg: 'repeat(3, 1fr)',
                            }}
                        >
                            {articles?.isFetching
                                ? [...Array(4)]?.map((_, index: number) => {
                                    return (
                                        <GridItem key={index}>
                                            <ArticleSkeleton />
                                        </GridItem>
                                    )
                                })
                                : articles?.isSuccess
                                ? articles?.data?.map((article: any, index: number) => {
                                        return (
                                            <GridItem key={index}>
                                                <ArticleItem
                                                    image={article?.image}
                                                    title={article?.title}
                                                    type={article?.type}
                                                    source={article?.source}
                                                    slug={article?.slug}
                                                    id={article?.id}
                                                    description={article?.description}
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
