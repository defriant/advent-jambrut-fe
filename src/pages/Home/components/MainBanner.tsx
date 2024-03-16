import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import ROUTE from '../../../routes/route'
import YouTube from 'react-youtube'
import { Link, useNavigate } from 'react-router-dom'
import { 
    Box, 
    Button, 
    Flex, 
    Heading,
    Text, 
} from '@chakra-ui/react'

function MainBanner() {
    const navigate = useNavigate()

    return (
        <Box backgroundColor='rgba(0, 58, 90, 0.3)' display='flex' position='relative'>
            <SectionContainer>
                <Flex 
                    gap='2rem' 
                    direction={{ base: 'column', lg: 'row' }}
                    justifyContent='center'
                    height='100vh'
                >
                    <Flex 
                        justifyContent='center'
                        direction='column'
                        width='100%'
                        gap='.5rem'
                    >
                        <Heading fontSize={{ base: '25px', sm: '40px' }} color='white'>
                            GMAHK Jemaat Jambrut
                        </Heading>
                        <Text color='white' fontSize={{ base: '12px', sm: '18px' }}>
                            Didorong oleh kasih Yesus, kami menjadikan Alkitab sebagai otoritas tertinggi. Gereja Masehi Advent Hari Ketujuh Jambrut merupakan Gereja Advent yang berdiri pada tahun (---)
                        </Text>
                        <Flex gap='0.5rem'>
                            <Button
                                as={Link}
                                to='https://maps.app.goo.gl/JHKjisXKXVMo9x5a7'
                                target='_black'
                                padding='13px 43px'
                                borderRadius='40px'
                                width='max-content'
                                size={{ base: 'sm', sm: 'unset' }}
                                marginTop={{ base: '0px', sm: '47px' }}
                            >
                                <Text
                                    fontWeight='semibold'
                                    fontSize={{ base: '12px', sm: '16px' }}
                                    color='primary'
                                >Location</Text>
                            </Button>
                            <Button
                                padding='13px 43px'
                                borderRadius='40px'
                                width='max-content'
                                onClick={() => navigate(ROUTE?.newsDetail?.replace(':newsId', '45'))}
                                size={{ base: 'sm', sm: 'unset' }}
                                marginTop={{ base: '0px', sm: '47px' }}
                            >
                                <Text
                                    fontWeight='semibold'
                                    fontSize={{ base: '12px', sm: '16px' }}
                                    color='primary'
                                >Susunan Pelayan 2024</Text>
                            </Button>
                        </Flex>
                    </Flex>
                    <Flex width='100%' alignItems='center'>
                        <Flex
                            as={YouTube}
                            videoId='usQPkJ6ipP8'
                            width={{ base: '100%', md: '640px' }}
                        />
                    </Flex>
                </Flex>
            </SectionContainer>
        </Box>
    )
}

export default React.memo(MainBanner)