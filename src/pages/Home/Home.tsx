import { useEffect } from 'react'
import Articles from './components/Articles'
import Gallery from './components/Gallery'
import MainBanner from './components/MainBanner'
import News from './components/News'
import { Stack } from '@chakra-ui/react'
import { useHome } from './home.hooks'

function Home() {
    const home = useHome()
    
    useEffect(() => {
        home?.refetch()
    }, [])

    return (
        <Stack spacing='0px'>
            <MainBanner />
            <Stack 
                position='relative' 
                zIndex='2' 
                backgroundColor='white'
                paddingY={{ base: '90px', sm: '119px' }}
                spacing='119px'
            >
                <News />
                <Articles />
                <Gallery />
            </Stack>
        </Stack>
    )
}

export default Home
