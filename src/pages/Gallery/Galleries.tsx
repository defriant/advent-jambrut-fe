import GalleriesContent from './components/GalleriesContent'
import { Stack } from '@chakra-ui/react'
import { useGalleries } from './Galleries.hooks'
import { useEffect } from 'react'

function Galleries() {
    const galleries = useGalleries()

    useEffect(() => {
        galleries?.refetch()
    }, [])

    return (
        <>
            <Stack
                spacing='0px'
                minHeight='100vh'
            >
                <GalleriesContent />
            </Stack>
        </>
    )
}

export default Galleries
