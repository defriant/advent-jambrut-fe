import { useEffect } from 'react'
import Content from './components/Content'
import { useArticles } from './Articles.hooks'
import { Stack } from '@chakra-ui/react'

function Articles() {
    const articles = useArticles()

    useEffect(() => {
        articles?.refetch()
    }, [])

    return (
        <Stack spacing='0px'>
            <Content />
        </Stack>
    )
}

export default Articles
