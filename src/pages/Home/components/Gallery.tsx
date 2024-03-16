import React, { useRef } from 'react'
import SectionContainer from '../../../components/SectionContainer'
import SectionTitle from '../../../components/SectionTitle'
import PanelEmpty from '../../../components/PanelEmpty'
import { Box, Button, Flex, Icon, Stack, useMediaQuery } from '@chakra-ui/react'
import { useHome } from '../home.hooks'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { 
    FaChevronLeft, 
    FaChevronRight, 
} from "react-icons/fa"
import { 
    Autoplay, 
    Navigation, 
    Pagination, 
} from 'swiper/modules'
import GalleryItem from './GalleryItem'
import ROUTE from '../../../routes/route'
import { useNavigate } from 'react-router-dom'

const Gallery: React.FC = () => {
    const home = useHome()
    const navigate = useNavigate()

    const data = home?.data?.sections?.find((x: any) => x?.type === 'gallery')
    const swiperRef = useRef<any>(null)
    const [isLargerThan768] = useMediaQuery('(min-width: 800px)')

    if (!data) return

    return (
        <SectionContainer>
            <Stack spacing='2rem' padding='0px'>
                <SectionTitle title='Gallery' />
                {data?.data?.length <= 0
                    ?   <PanelEmpty message='Empty data' />
                    :   null
                }

                <>
                    <Flex alignItems='center' gap='1rem' overflow='hidden'>
                        <Icon
                            cursor='pointer'
                            fontSize='24px'
                            color='primary'
                            as={FaChevronLeft}
                            onClick={() => swiperRef?.current?.swiper?.slidePrev()}
                        />
                        <Box
                            ref={swiperRef}
                            as={Swiper}
                            position='relative'
                            loop={true}
                            slidesPerView={isLargerThan768 ? 3 : 1}
                            modules={[Navigation, Pagination, Autoplay]}
                            grabCursor={true}
                            autoplay={true}
                            pagination={{
                                el: '.gallery-pagination',
                                clickable: true
                            }}
                            allowTouchMove={true}
                            spaceBetween={8}
                            width='100%'
                        >
                            {
                                data?.data?.map((v: any, i: number) => (
                                    <SwiperSlide key={i} style={{ zIndex: '1' }}>
                                        <GalleryItem
                                            image={v?.image}
                                            title={v?.caption}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </Box>
                        <Icon
                            cursor='pointer'
                            fontSize='24px'
                            color='primary'
                            as={FaChevronRight}
                            onClick={() => swiperRef?.current?.swiper?.slideNext()}
                        />
                    </Flex>
                    <Box
                        className='gallery-pagination'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        marginTop='-1rem'
                    />
                </>
                {data?.data?.length > 4
                    ?   <Button
                            padding='13px 43px'
                            borderRadius='40px'
                            width='max-content'
                            fontWeight='semibold'
                            onClick={() => navigate(ROUTE?.gallery)}
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

export default React.memo(Gallery)