import React, { useMemo } from 'react'
import ROUTE from '../routes/route' 
import { CgMenuRight } from 'react-icons/cg'
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import {
    Box,
    Container,
    Flex,
    Image,
    Link,
    useMediaQuery,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Icon,
} from '@chakra-ui/react'
import { LOGO } from '../assets'

type NavbarProps = {
    isOnTop: boolean
}

type TLink = {
    label: string
    href: string
}

function Navbar(props: NavbarProps) {
    const { isOnTop } = props
    const location = useLocation()
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    const { isOpen, onOpen, onClose } = useDisclosure()

    const links: TLink[] = useMemo(
        () => [
            { label: 'HOME', href: '/' },
            { label: 'GALLERY', href: '/gallery' },
            { label: 'NEWS', href: '/news' },
            { label: 'ARTICLES', href: '/articles' },
        ],
        [],
    )

    return (
        <Box
            backgroundColor={isOnTop ? 'transparent' : 'white'}
            shadow={isOnTop ? 'none' : 'lg'}
            position='fixed'
            top='0px'
            left='0px'
            right='0px'
            transition='0.3s'
            zIndex='998'
        >
            <Container maxWidth='container.xl'>
                <Flex
                    alignItems='center'
                    padding={`${isOnTop ? '32px 0px' : '16px 0px'}`}
                    transition='0.3s'
                    justifyContent='space-between'
                >
                    <Link
                        as={ReactRouterLink}
                        to={ROUTE?.home}
                        fontFamily='Lato'
                        fontSize='20px'
                        color={isOnTop ? 'white' : 'black'}
                    >
                        <Image
                            src={isOnTop ? LOGO : LOGO}
                            height={isOnTop ? '60px' : '50px'}
                            transition='.3s'
                        />
                    </Link>
                    {isLargerThan768 ? (
                        <Flex
                            alignItems='center'
                            gap='2rem'
                        >
                            {links?.map((link: TLink, linkIndex: number) => {
                                const activeLink: (path: string) => boolean = path => {
                                    if (path === '/') return location.pathname === '/'
                                    return location.pathname.startsWith(path)
                                }

                                const isActive: boolean = activeLink(link.href)

                                return (
                                    <Link
                                        key={linkIndex}
                                        as={ReactRouterLink}
                                        to={link?.href}
                                        transition='.3s'
                                        borderBottomWidth={isActive ? '3px' : 'none'}
                                        borderBottomColor={isOnTop
                                            ?   isActive
                                                ?   'primary'
                                                :   'black'
                                            :   isActive
                                                ?   'primary'
                                                :   'black'
                                        }
                                        fontWeight={isActive ? 'semibold' : 'normal'}
                                        _hover={{}}
                                        color={isOnTop
                                            ?   location?.pathname === ROUTE?.home
                                                ?   'white'
                                                :   isActive
                                                    ?   'primary'
                                                    :   'black'
                                            :   isActive
                                                ?   'primary'
                                                :   'black'
                                        }
                                        fontFamily='Lato'
                                        fontSize='15px'
                                    >
                                        {link?.label}
                                    </Link>
                                )
                            })}
                        </Flex>
                    ) : (
                        <>
                            <Icon
                                cursor='pointer'
                                onClick={onOpen}
                                as={CgMenuRight}
                                transition='.3s'
                                fontSize={isOnTop ? '36px' : '24px'}
                                color={isOnTop 
                                    ?   location?.pathname === ROUTE?.home
                                        ?   'white'
                                        :   'black'
                                    :   'black'
                                }
                            />
                            <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                            >
                                <DrawerOverlay backdropFilter='blur(5px)' />
                                <DrawerContent>
                                    <DrawerCloseButton />
                                    <DrawerBody py='3rem'>
                                        <Flex
                                            direction='column'
                                            gap='1rem'
                                            marginTop='4px'
                                            marginY='auto'
                                        >
                                            {links?.map((link: TLink, linkIndex: number) => {
                                                const activeLink: (path: string) => boolean = path => {
                                                    if (path === '/') return location.pathname === '/'
                                                    return location.pathname.startsWith(path)
                                                }

                                                const isActive: boolean = activeLink(link.href)

                                                return (
                                                    <Link
                                                        key={linkIndex}
                                                        as={ReactRouterLink}
                                                        to={link?.href}
                                                        transition='.3s'
                                                        paddingLeft={isActive ? '.5rem' : 'none'}
                                                        borderLeftWidth={isActive ? '3px' : 'none'}
                                                        borderLeftColor={isActive ? 'primary' : 'none'}
                                                        fontWeight={isActive ? 'semibold' : 'normal'}
                                                        _hover={{}}
                                                        width='max-content'
                                                        color={isActive ? 'primary' : 'black'}
                                                        onClick={onClose}
                                                        fontSize='15px'
                                                    >
                                                        {link?.label}
                                                    </Link>
                                                )
                                            })}
                                        </Flex>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </>
                    )}
                </Flex>
            </Container>
        </Box>
    )
}

export default React.memo(Navbar)
