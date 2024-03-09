import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import SectionTitle from '../../../components/SectionTitle'
import { Button, Grid, GridItem, Stack, useMediaQuery } from '@chakra-ui/react'
import { useHome } from '../home.hooks'
import PanelEmpty from '../../../components/PanelEmpty'
import ArticleSkeleton from '../../Articles/components/ArticleSkeleton'
import ArticleItem from './ArticleItem'
import ROUTE from '../../../routes/route'
import { useNavigate } from 'react-router-dom'

const Articles: React.FC = () => {
    const home = useHome()
    const navigate = useNavigate()
    const [isLowerThan576] = useMediaQuery('(max-width: 576px)')

    const data = home?.data?.sections?.find((x: any) => x?.type === 'article')

    return (
        <SectionContainer>
            <Stack spacing='2rem' padding='0px'>
                <SectionTitle title='Articles' />
                {data?.data?.length <= 0
                    ?   <PanelEmpty message='Empty data' />
                    :   <Grid
                            gridGap='2rem'
                            gridTemplateColumns={{
                                base: 'repeat(auto-fill, minmax(250px, 1fr))',
                                lg: 'repeat(3, 1fr)',
                            }}
                        >
                            {home?.isFetching
                                ? [...Array(4)]?.map((_, index: number) => {
                                    return (
                                        <GridItem key={index}>
                                            <ArticleSkeleton />
                                        </GridItem>
                                    )
                                })
                                : home?.isSuccess
                                ? data?.data?.map((article: any, index: number) => {
                                        if (isLowerThan576 && index > 2) return
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
                {data?.data?.length > 4
                    ?   <Button
                            padding='13px 43px'
                            borderRadius='40px'
                            width='max-content'
                            fontWeight='semibold'
                            onClick={() => navigate(ROUTE?.articles)}
                            fontSize={{ base: '14px', sm: '16px' }}
                            size={{ base: 'sm', sm: 'unset' }}
                            marginX='auto'
                        >
                            See More
                        </Button>
                    :   null
                }
            </Stack>
        </SectionContainer>
    )
}

export default React.memo(Articles)