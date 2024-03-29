import React from 'react'
import SectionContainer from './SectionContainer'
import { Link as ReactRouterLink } from 'react-router-dom'
import { FaMap, FaYoutube } from 'react-icons/fa'
import {
    Box,
    Divider,
    Flex,
    Heading,
    Icon,
    Image,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react'
import { LOGO_FOOTER } from '../assets'
import { format } from 'date-fns'

function Footer() {
    const USEFUL_LINKS = [
        { name: 'Gallery', href: '/gallery' },
        { name: 'News', href: '/news' },
        { name: 'Articles', href: '/articles' },
    ]

    const SOCIAL_MEDIAS = [
        { icon: FaYoutube, href: 'https://www.youtube.com/@adventjambrut6654' },
    ]

    return (
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
                        alignItems={{ base: 'unset', sm: 'flex-start' }}
                    >
                        <Flex alignItems='center' gap='8px' marginBottom='1rem'>
                            <Image
                                src={LOGO_FOOTER}
                                width='48px'
                                height='48px'
                            />
                            <Heading fontSize='20px' color='white'>GMAHK  Jambrut</Heading>
                        </Flex>
                        <Text
                            fontSize='14px'
                            fontWeight='400'
                            color='white'
                            id='location'
                        >
                            Jalan Jambrut 13, Kecamatan Senen, Jakarta Pusat 10330
                            <ReactRouterLink
                                to='https://maps.app.goo.gl/JHKjisXKXVMo9x5a7'
                                target='_blank'
                            >
                                <Icon
                                    marginLeft='0.5rem' 
                                    as={FaMap}
                                    cursor='pointer'
                                />
                            </ReactRouterLink>
                        </Text>
                    </Flex>
                    <Flex
                        direction='column'
                        width='100%'
                        gap='1rem'
                        alignItems={{ base: 'unset', sm: 'center' }}
                    >
                        <Flex height='48px' alignItems='center' marginBottom='1rem'> 
                            <Heading fontSize='20px' color='white'>Useful Links</Heading>
                        </Flex>
                        {USEFUL_LINKS?.map((link: any, index: number) => {
                            return (
                                <Link
                                    key={index}
                                    as={ReactRouterLink}
                                    to={link?.href}
                                    color='white'
                                    fontWeight='semibold'
                                    fontSize='14px'
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
                        alignItems={{ base: 'unset', sm: 'center' }}
                    >
                        <Flex height='48px' alignItems='center' marginBottom='1rem'> 
                            <Heading fontSize='20px' color='white'>Sosial Media</Heading>
                        </Flex>
                        <Flex alignItems='center' gap='.5rem'>
                            {SOCIAL_MEDIAS?.map((socialMedia: any, index: number) => {
                                return (
                                    <ReactRouterLink 
                                        key={index} 
                                        to={socialMedia?.href} 
                                        target='_blank'
                                    >
                                        <Icon
                                            as={socialMedia?.icon}
                                            fontSize='20px'
                                            color='white'
                                            cursor='pointer'
                                        />
                                    </ReactRouterLink>
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
                            &copy; {format(new Date(), 'yyyy')} Advent Jambrut, All Rights Reserved
                        </Text>
                    </Stack>
                </Stack>
            </SectionContainer>
        </Box>
    )
}

export default React.memo(Footer)
