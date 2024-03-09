import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { 
    Box, 
    Button, 
    Flex, 
    Heading,
    Icon,
    Text, 
} from '@chakra-ui/react'
import ROUTE from '../../../routes/route'

function MainBanner() {
    const navigate = useNavigate()

    return (
        <Box backgroundColor='rgba(0, 58, 90, 0.3)' display='flex' position='relative'>
            <SectionContainer>
                <Flex 
                    minHeight={{ base: '60vh', sm: '80vh' }} 
                    justifyContent='center'
                    direction='column'
                    gap='47px'
                >
                    <Heading fontSize={{ base: '25px', sm: '40px' }} color='white'>
                        GMAHK Advent Jambrut
                    </Heading>
                    <Button
                        padding='13px 43px'
                        borderRadius='40px'
                        width='max-content'
                        fontWeight='semibold'
                        onClick={() => navigate(ROUTE?.articles)}
                        fontSize={{ base: '14px', sm: '16px' }}
                        size={{ base: 'sm', sm: 'unset' }}
                    >
                        Articles
                    </Button>
                </Flex>

                <Flex position='relative'>
                    <Flex 
                        cursor='pointer'
                        onClick={() => navigate(ROUTE?.newsDetail?.replace(':newsId', '45'))}
                        padding={{ base: '17px 14px', sm: '34px 29px' }}
                        backgroundColor='white'
                        boxShadow='4px 4px 20px 0px #00000040'
                        marginX='auto'
                        position='absolute'
                        bottom='0px'
                        left='0px'
                        right='0px'
                        transform='translate(0%, 50%)'
                        zIndex='89'
                        alignItems='center'
                        gap='129px'
                        width='100%'
                        justifyContent='space-between'
                    >
                        <Text fontSize={{ base: '12px', sm: '25px' }} color='#0481C5' fontWeight='semibold'>
                            SUSUNAN PELAYAN JEMAAT GMAHK JAMBRUT TAHUN 2024
                        </Text>
                        <Icon 
                            as={FaArrowRight} 
                            fontSize={{ base: '15px', sm: '25px' }} 
                            color='#0481C5' 
                        />
                    </Flex>
                </Flex>
            </SectionContainer>
        </Box>
    )
}

export default React.memo(MainBanner)