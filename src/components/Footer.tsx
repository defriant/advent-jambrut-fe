import React from 'react'
import SectionContainer from './SectionContainer'
import { Link as ReactRouterLink } from 'react-router-dom'
import { 
    FaInstagram, 
    FaWhatsapp, 
    FaFacebook, 
    FaYoutube,
    FaStethoscope, 
} from 'react-icons/fa'
import {
    Box,
    Center,
    Divider,
    Flex,
    Heading,
    Icon,
    Image,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react'

function Footer() {
    const USEFUL_LINKS = [
        { name: 'About Us', href: '/' },
        { name: 'Contact Us', href: '/' },
        { name: 'Customer Service', href: '/' },
        { name: 'Our Location', href: '/' },
    ]

    const SOCIAL_MEDIAS = [
        { icon: FaInstagram },
        { icon: FaWhatsapp },
        { icon: FaFacebook },
        { icon: FaYoutube },
    ]

    return (
        <Stack spacing='0px'>
            <Box
                height='2rem'
                backgroundColor='white'
            />
            <Center
                paddingY='3rem'
                backgroundColor='rgba(0, 0, 0, 0.5)'
                backdropFilter='blur(8px)'
            >
                <Image
                    // src={sei_logo_font_white}
                    height='6rem'
                />
            </Center>
            <Box backgroundColor='#003a5a'>
                <SectionContainer>
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        paddingY='6rem'
                        gap='6rem'
                    >
                        <Flex
                            direction='column'
                            width='100%'
                            gap='1rem'
                        >
                            <Flex alignItems='center' gap='8px' marginBottom='1rem'>
                                <Icon 
                                    as={FaStethoscope} 
                                    fontSize='24px'
                                    color='white'
                                />
                                <Heading fontSize='24px' color='white'>Sp.KK Seminar</Heading>
                            </Flex>
                            <Text
                                fontSize='normal'
                                fontWeight='400'
                                color='white'
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneansollicitudin, lorem quis bibn set erim nosos.
                            </Text>
                            <Text
                                fontSize='normal'
                                fontWeight='400'
                                color='white'
                            >
                                +62812345678
                            </Text>
                            <Text
                                fontSize='normal'
                                fontWeight='400'
                                color='white'
                            >
                                Jl. Abcde, Blok AB 10, Jakarta Raya
                            </Text>
                        </Flex>
                        <Flex
                            direction='column'
                            width='100%'
                            gap='1rem'
                        >
                            <Heading fontSize='24px' color='white' marginBottom='1rem'>Useful Links</Heading>
                            {USEFUL_LINKS?.map((link: any, index: number) => {
                                return (
                                    <Link 
                                        key={index} 
                                        as={ReactRouterLink}
                                        to={link?.href}
                                        color='white'
                                        fontWeight='semibold'
                                    >
                                        {link?.name}
                                    </Link>
                                )
                            })}
                        </Flex>
                        <Flex
                            width='100%'
                            gap='1rem'
                            direction='column'
                        >
                            <Heading fontSize='24px' color='white' marginBottom='1rem'>Sosial Media</Heading>
                            <Flex alignItems='center' gap='.5rem'>
                                {SOCIAL_MEDIAS?.map((socialMedia: any, index: number) => {
                                    return (
                                        <Icon 
                                            key={index} 
                                            as={socialMedia?.icon} 
                                            fontSize='24px'
                                            color='white'
                                            cursor='pointer'
                                        />
                                    )
                                })}
                            </Flex>
                        </Flex>
                    </Flex>
                    <Stack
                        spacing='1.5rem'
                        paddingBottom='1.5rem'
                    >
                        <Divider />
                        <Stack spacing='0rem'>
                            <Text
                                textAlign='center'
                                fontSize='xs'
                                color='white'
                            >
                                &copy; 2024 Advent Jambrut, All Rights Reserved
                            </Text>
                        </Stack>
                    </Stack>
                </SectionContainer>
            </Box>
        </Stack>
    )
}

export default React.memo(Footer)
