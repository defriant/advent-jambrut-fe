import { useEffect } from 'react'
import ArticleImage from './components/ArticleImage'
import ArticleContent from './components/ArticleContent'
import ArticleNotFound from './components/ArticleNotFound'
import SectionContainer from '../../components/SectionContainer'
import { useArticle } from './Article.hooks'
import { Heading, Stack } from '@chakra-ui/react'

function ArticleDetail() {
    const article = useArticle()

    useEffect(() => {
        article?.refetch()
    }, [])

    if (article?.isError) return <ArticleNotFound />

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
                            {article?.data?.title}
                        </Heading>  
                    </SectionContainer>
                    <ArticleImage />
                    <ArticleContent />
                </Stack>
            </Stack>
        </>
    )
}

export default ArticleDetail
