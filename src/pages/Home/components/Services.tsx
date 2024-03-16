import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import SectionTitle from '../../../components/SectionTitle'
import { Flex, Grid, Image, Stack, Text } from '@chakra-ui/react'
import { KHOTBAH, PEMUDA, PENDALAMAN } from '../../../assets'

const Services: React.FC = () => {
    const SERVICES = [
        {
            image: PENDALAMAN,
            title: 'Pendalaman Alkitab',
            description: '',
        },
        {
            image: PEMUDA,
            title: 'Pemuda Advent',
            description: '',
        },
        {
            image: KHOTBAH,
            title: 'Khotbah',
            description: '',
        },
    ]

    return (
        <SectionContainer>
            <Stack spacing='2rem' padding='0px'>
                <SectionTitle title='Pelayanan' />
                <Grid
                    gridTemplateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)'
                    }}
                    gridGap='2rem'
                >
                    {SERVICES?.map((service: any, index: number) => {
                        return (
                            <Flex direction='column' key={index}>
                                <Image 
                                    src={service?.image}
                                    objectFit='cover' 
                                    height='300px' 
                                    width='100%' 
                                    borderRadius='8px' 
                                />
                                <Flex
                                    direction='column'
                                    gap='.5rem'
                                    justifyContent='center'
                                    alignItems='center'
                                    borderRadius='8px'
                                    marginX='1rem'
                                    backgroundColor='rgb(255, 255, 255, 0.8)'
                                    marginTop='-3rem'
                                    position='relative'
                                    shadow='normal'
                                    padding='1rem'
                                >
                                    <Text 
                                        textAlign='center' 
                                        color='primary' 
                                        fontWeight='semibold'
                                        fontSize='18px'
                                    >{service?.title}</Text>
                                    <Text 
                                        textAlign='center' 
                                        fontSize='13px'
                                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nisi quaerat laboriosam consequatur ratione totam praesentium eaque mollitia quod assumenda similique, doloremque libero culpa repellendus.</Text>
                                </Flex>
                            </Flex>
                        )
                    })}
                </Grid>
            </Stack>
        </SectionContainer>
    )
}

export default React.memo(Services)