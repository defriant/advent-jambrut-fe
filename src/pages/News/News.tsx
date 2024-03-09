import { useEffect } from "react"
import Content from "./components/Content"
import { useNews } from "./News.hooks"
import { Stack } from "@chakra-ui/react"

function News() {
    const news = useNews()

    useEffect(() => {
        news?.refetch()
    }, [])

    return (
        <Stack spacing='0px'>
            <Content />
        </Stack>
    )
}

export default News