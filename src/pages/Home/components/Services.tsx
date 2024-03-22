import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import SectionTitle from '../../../components/SectionTitle'
import { Button, Flex, Grid, Image, Stack, Text } from '@chakra-ui/react'
import { KHOTBAH, PEMUDA, PENDALAMAN } from '../../../assets'
import { useNavigate } from 'react-router-dom'
import ROUTE from '../../../routes/route'

const Services: React.FC = () => {
    const SERVICES = [
        {
            image: PENDALAMAN,
            title: 'Departemen Pemuda Advent',
            description: 'Kaum muda Gereja Masehi Advent Hari Ketujuh dihargai bukan hanya sebagai masa depannya namun juga sebagai anggota komunitas saat ini yang sangat penting. Departemen Pemuda membantu mengembangkan sumber daya dan program untuk mendukung dan membimbing generasi muda. Tim ini bekerja sama erat dengan para pemimpin pemuda regional untuk menemukan cara yang relevan untuk mendorong dan melatih kaum muda saat mereka membantu komunitas mereka untuk mempelajari Alkitab guna menemukan kebebasan, penyembuhan dan harapan di dalam Yesus.',
        },
        {
            image: PEMUDA,
            title: 'Departemen Penatalayanan',
            description: 'Penatalayanan adalah tentang bagaimana kita sebagai manusia menjaga sumber daya yang Tuhan berikan kepada kita. Penggunaan yang bijaksana atas apa yang kita miliki berarti bahwa pekerjaan Tuhan dapat berkembang dan lebih banyak orang dapat memahami Alkitab untuk menemukan kebebasan, kesembuhan, dan harapan di dalam Yesus. Departemen Penatalayanan membantu melatih para pemimpin dan anggota Advent di seluruh dunia dalam prinsip-prinsip penatalayanan yang alkitabiah.',
        },
        {
            image: KHOTBAH,
            title: 'Rumah Tangga',
            description: 'Gereja Masehi Advent Hari Ketujuh adalah pendukung besar kehidupan keluarga yang bahagia. Departemen Pelayanan Keluarga berdedikasi untuk memperkuat keluarga melalui layanan seperti bimbingan pranikah, seminar pernikahan, pembinaan untuk orang tua, dan pendidikan Alkitab khusus yang disesuaikan untuk keluarga. Tujuannya adalah untuk membangun, memperkaya dan merayakan keluarga, membantu setiap anggota memahami Alkitab untuk menemukan harapan dan makna dalam hubungan pribadi dengan Yesus. Tidak ada kesaksian yang lebih baik mengenai kuasa Yesus selain dari sebuah keluarga penuh kasih yang bekerja sebagai sebuah tim untuk membagikan Alkitab kepada orang lain.',
        },
    ]

    const navigate = useNavigate()

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
                                    >{service?.description}</Text>
                                </Flex>
                            </Flex>
                        )
                    })}
                </Grid>
                <Button
                    padding='13px 43px'
                    borderRadius='40px'
                    width='max-content'
                    fontWeight='semibold'
                    onClick={() => navigate(ROUTE?.articleDetail?.replace(':articleId', '61'))}
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
            </Stack>
        </SectionContainer>
    )
}

export default React.memo(Services)