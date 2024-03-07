import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import { 
    Box, 
    Button, 
    Flex, 
    Heading,
    Icon,
    Text, 
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

function MainBanner() {
    return (
        <Box backgroundColor='rgba(0, 0, 0, 0.5)' display='flex' position='relative'>
            <SectionContainer>
                <Flex 
                    minHeight='100vh' 
                    justifyContent='center'
                    direction='column'
                    gap='47px'
                >
                    <Heading fontSize='50px' color='white'>
                        LOREM IPSUM
                    </Heading>
                    <Text color='white' maxWidth='927px'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tincidunt mi, a iaculis sapien. Proin consequat at sapien id consequat.
                    </Text>
                    <Button
                        padding='13px 43px'
                        borderRadius='40px'
                        width='max-content'
                        fontWeight='semibold'
                    >
                        Articles
                    </Button>
                </Flex>
            </SectionContainer>

            <Flex 
                padding='34px 29px'
                backgroundColor='white'
                boxShadow='4px 4px 20px 0px #00000040'
                marginX='auto'
                position='absolute'
                bottom='0px'
                left='50%'
                transform='translate(-50%, 50%)'
                zIndex='89'
                alignItems='center'
                gap='129px'
                width='max-content'
            >
                <Text fontSize='25px' color='#0481C5' fontWeight='semibold'>
                    SUSUNAN PELAYAN JEMAAT <br /> GMAHK JAMBRUT TAHUN 2024
                </Text>
                <Icon as={FaArrowRight} fontSize='25px' color='#0481C5' />
            </Flex>
        </Box>
    )
}

export default React.memo(MainBanner)