import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import SectionTitle from '../../../components/SectionTitle'
import PanelEmpty from '../../../components/PanelEmpty'
import NewsSkeleton from '../../News/components/NewsSkeleton'
import NewsItem from './NewsItem'
import { useHome } from '../home.hooks'
import { useNavigate } from 'react-router-dom'
import { 
    Button,
    Grid, 
    GridItem, 
    Stack,
    useMediaQuery, 
} from '@chakra-ui/react'
import ROUTE from '../../../routes/route'

const News: React.FC = () => {
    const home = useHome()
    const navigate = useNavigate()
    const [isLowerThan576] = useMediaQuery('(max-width: 576px)')

    const data = home?.data?.sections?.find((x: any) => x?.type === 'news')

    return (
        <SectionContainer>
            <Stack spacing='2rem' padding='0px'>
                <SectionTitle title='News' />
                <SectionContainer>
                    {data?.data?.length <= 0
                        ?   <PanelEmpty message='Empty Data' />
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
                                                <NewsSkeleton />
                                            </GridItem>
                                        )
                                    })
                                    : home?.isSuccess
                                    ? data?.data?.map((news: any, index: number) => {
                                            if (isLowerThan576 && index > 2) return
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
                {data?.data?.length > 4
                    ?   <Button
                            padding='13px 43px'
                            borderRadius='40px'
                            width='max-content'
                            fontWeight='semibold'
                            onClick={() => navigate(ROUTE?.news)}
                            fontSize={{ base: '14px', sm: '16px' }}
                            size={{ base: 'sm', sm: 'unset' }}
                            marginX='auto'
                            backgroundColor='primary'
                            color='white'
                            _hover={{
                                color: 'black',
                                backgroundColor: 'silver',
                            }}
                        >
                            See More
                        </Button>
                    :   null
                }
            </Stack>
        </SectionContainer>
    )
}

export default React.memo(News)