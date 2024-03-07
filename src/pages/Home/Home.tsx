import Articles from './components/Articles'
import Gallery from './components/Gallery'
import MainBanner from './components/MainBanner'
import News from './components/News'
import { Stack } from '@chakra-ui/react'

function Home() {
    return (
        <Stack spacing='0px'>
            <MainBanner />
            <Stack 
                position='relative' 
                zIndex='2' 
                backgroundColor='white'
            >
                <News />
                <Articles />
                <Gallery />
            </Stack>
        </Stack>
    )
}

export default Home
