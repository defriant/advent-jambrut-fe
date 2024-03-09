import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import PanelEmpty from '../../../components/PanelEmpty'
import GallerySkeleton from './GallerySkeleton'
import { useGalleries } from '../Galleries.hooks'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import GalleryItem from '../../Home/components/GalleryItem'
import SectionTitle from '../../../components/SectionTitle'

function AlbumsContent() {
    const gallery = useGalleries()

    return (
        <Box
            paddingY='2rem'
            backgroundColor='white'
            flex='1'
            paddingTop='124px'
        >
            <SectionTitle title='Gallery' />
            <Box height='3rem' />
            <SectionContainer>
                {gallery?.data?.length <= 0
                    ?   <PanelEmpty message='Empty data' />
                    :   <Grid
                            gridGap='2rem'
                            gridTemplateColumns={{
                                base: 'repeat(auto-fill, minmax(250px, 1fr))',
                                lg: 'repeat(3, 1fr)',
                            }}
                        >
                            {gallery?.isFetching
                                ? [...Array(4)]?.map((_, index: number) => {
                                    return (
                                        <GridItem key={index}>
                                            <GallerySkeleton />
                                        </GridItem>
                                    )
                                })
                                : gallery?.isSuccess
                                ? gallery?.data?.map((album: any, index: number) => {
                                        return (
                                            <GridItem key={index}>
                                                <GalleryItem
                                                    image={album?.image}
                                                    title={album?.caption}
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

export default React.memo(AlbumsContent)
