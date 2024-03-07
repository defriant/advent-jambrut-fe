import React from 'react'
import SectionContainer from '../../../components/SectionContainer'
import SectionTitle from '../../../components/SectionTitle'
import { Stack } from '@chakra-ui/react'

const Articles: React.FC = () => {
    return (
        <SectionContainer>
            <Stack spacing='0px' padding='119px 0px'>
                <SectionTitle title='Articles' />
            </Stack>
        </SectionContainer>
    )
}

export default React.memo(Articles)