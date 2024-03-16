import React, { useRef } from 'react'
import SectionContainer from '../../../components/SectionContainer'
import ROUTE from '../../../routes/route'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useNavigate } from 'react-router-dom'
import { PRAYER, SALIB } from '../../../assets'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
    Autoplay,
    Navigation,
    Pagination,
} from 'swiper/modules'
import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Text,
} from '@chakra-ui/react'

const Zigzag: React.FC = () => {
    const swiperRef = useRef<any>(null)
    const navigate = useNavigate()

    const DATA = [
        "Kitab Suci yang terdiri dari Perjanjian Lama dan Perjanjian Baru, adalah Firman Allah yang tertulis, yang diberikan oleh inspirasi llahi melalui orang-orang kudus Allah yang bericara dan menulis karena mereka digerakkan oleh Roh Kudus. Dalam Firman tertulis ini, Allah telah memberikan kepada manusia pengetahuan yang perlu untuk keselamatan. Kitab Suci adalah pemyataan tentang kehendak Allah yang tidak mungkin salah. Itu merupakan ukuran tabiat, ujian pengalaman, pengungkap doktrin yang sah, dan catatan yang terpercaya perihal tindakan-tindakan Allah dalam sejarah. (2 Ptr. 1:20,21; 2 Tim. 3:16,17; Mzm. 119:105; Ams. 30:5,6; Yes. 8:20; Yoh. 17:17; 1 Tes. 2:13; Ibr. 4:12.)",
        "Ada satu Allah: Bapa, Anak, dan Roh Kudus, suatu kesatuan dari tiga Pribadi yang kekal. Allah itu abadi, Mahakuasa, Mahatahu, lebih dari segalanya, dan hadir di mana-mana. Allah itu tidak terbatas dan lebih dari pemahaman manusia, namun dikenal melalui penyataan diriNya. Dia itu layak disembah, dipuja dan dilayani selama-lamanya oleh segenap ciptaan. (Ul. 6:4; Mat.28:19; 2 Kor. 13:14; Ef. 4:4-6; 1 Ptr.1:2; 1 Tim. 1:17; Why. 14:7.)",
        "Allah Bapa yang kekal adalah Pencipta, Sumber, Pemelihara, dan Raja yang berkuasa atas segala ciptaan. Dia itu benar dan suci, penuh kemurahan dan rahmat, sabar, dan belimpah kasih dan kesetiaan. Sifat-sifat serta kuasa yang ditunjukkan dalam Anak dan Roh Kudus adalah juga menggambarkan Bapa. (Kej. 1:l; Why. 4:11; 1 Kor. 15:28; Yoh. 3:16; 1 Yoh. 4:8; 1 Tim. 1:17; Kel. 34:6, 7; Yoh. 14:9.)",
    ]

    return (
        <Flex paddingY='119px' backgroundColor='rgb(147, 185, 197, 0.2)'> 
        {/* rgb(147, 185, 197) */}
            <SectionContainer>
                <Flex direction='column' gap={{ base: '3rem', sm: '3rem' }}>
                    <Flex
                        gap='1rem'
                        direction={{
                            base: 'column',
                            sm: 'row'
                        }}
                        width='100%'
                        alignItems={{ base: 'center', sm: 'unset' }}
                    >
                        <Image src={SALIB} width='300px !important' height='300px !important' objectFit='cover' />
                        <Flex 
                            direction='column' 
                            gap='1rem' 
                            flex='1' 
                            alignItems={{ base: 'center', sm: 'unset' }}
                        >
                            <Text 
                                fontSize='28px' 
                                textAlign={{ base: 'center', sm: 'unset' }} 
                                color='primary' 
                                fontWeight='semibold'
                            >Tentang Kami</Text>
                            <Text 
                                fontSize='16px' 
                                fontStyle='italic'
                                textAlign={{ base: 'center', sm: 'unset' }}
                            >Didorong oleh kasih Yesus, kami menjadikan Alkitab sebagai otoritas tertinggi. Pendalaman atas ayat-ayat Alkitab menjadikan kami penuh semangat untuk menyampaikan kehendak Allah bagi manusia secara murni dan bebas dari distorsi kepentingan dalam penafsiran Alkitab.</Text>
                        </Flex>
                    </Flex>

                    <Flex
                        gap='1rem'
                        direction={{
                            base: 'column-reverse',
                            sm: 'row'
                        }}
                        width='100%'
                        alignItems={{ base: 'center', sm: 'unset' }}
                    >
                        <Flex 
                            direction='column' 
                            gap='1rem' 
                            width={{ base: '100%', sm: 'calc(100% - 300px)' }}
                        >
                            <Text 
                                fontSize='28px' 
                                textAlign={{ base: 'center', sm: 'right' }} 
                                color='primary' 
                                fontWeight='semibold'
                            >Kepercayaan Kami</Text>
                            <Box>
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
                                            slidesPerView={1}
                                            modules={[Navigation, Pagination, Autoplay]}
                                            grabCursor={true}
                                            autoplay={true}
                                            pagination={{
                                                el: '.gallery-pagination',
                                                clickable: true
                                            }}
                                            allowTouchMove={true}
                                            spaceBetween={8}
                                            speed={3000}
                                        >
                                            {
                                                DATA?.map((v: string, i: number) => (
                                                    <SwiperSlide key={i} style={{ zIndex: '1' }}>
                                                        <Text 
                                                            fontSize='16px' 
                                                            fontStyle='italic' 
                                                            textAlign={{ base: 'center', sm: 'right' }}
                                                            marginX='8px'
                                                        >
                                                            {v}
                                                        </Text>
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
                                </>
                            </Box>
                            <Button
                                padding='13px 43px'
                                borderRadius='40px'
                                width='max-content'
                                fontWeight='semibold'
                                onClick={() => navigate(ROUTE?.articleDetail?.replace(':articleId', '60'))}
                                fontSize={{ base: '14px', sm: '16px' }}
                                size={{ base: 'sm', sm: 'unset' }}
                                marginLeft='auto'
                                marginRight={{ base: 'auto', sm: 'unset' }}
                                backgroundColor='primary'
                                color='white'
                                _hover={{
                                    color: 'black',
                                    backgroundColor: 'silver',
                                }}
                            >
                                Read More
                            </Button>
                        </Flex>
                        <Flex width='100%' alignItems={{ base: 'center', sm: 'unset' }} justifyContent={{ base: 'center', sm: 'unset' }}>
                            <Image src={PRAYER} width='300px !important' height='300px !important' objectFit='cover' />
                        </Flex>
                    </Flex>
                </Flex>
            </SectionContainer>
        </Flex>
    )
}

export default React.memo(Zigzag)