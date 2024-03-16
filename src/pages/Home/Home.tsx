import { useEffect } from 'react'
import Articles from './components/Articles'
import Gallery from './components/Gallery'
import MainBanner from './components/MainBanner'
import News from './components/News'
import Zigzag from './components/Zigzag'
import Services from './components/Services'
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
                paddingBottom={{ base: '90px', sm: '119px' }}
                spacing='119px'
            >
                <Zigzag />
                <Services />
                <News />
                <Articles />
                <Gallery />
            </Stack>
        </Stack>
    )
}

export default Home
