import React, { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'

type SectionContainerProps = {
    children: ReactNode
}

function SectionContainer(props: SectionContainerProps) {
    const { children } = props

    return (
        <Container maxWidth='container.xl'>
            {children}
        </Container>
    )
}

export default React.memo(SectionContainer)