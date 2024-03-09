import React from 'react'
import ROUTE from '../../../routes/route'
import { Link } from 'react-router-dom'
import { 
    Image, 
    Stack, 
    Text, 
} from '@chakra-ui/react'

type NewsItemProps = {
    image: string
    content: string
    title: string
    id: string
}

function NewsItem(props: NewsItemProps) {
    const { 
        image, 
        id, 
        content, 
        title,
    } = props

    return (
        <Stack
            as={Link}
            to={ROUTE?.newsDetail?.replace(':newsId', id)}
            spacing='1rem'
            width='100%'
            cursor='pointer'
            transition='.3s'
            _hover={{
                transform: 'translateY(-.25rem)',
            }}
        >
            <Image
                src={image}
                height='250px'
                objectFit='cover'
            />
            <Stack spacing='.5rem'>
                <Text
                    fontSize='sm'
                    fontWeight='bold'
                    noOfLines={2}
                    overflow='hidden'
                    textOverflow='ellipsis'
                    color='black'
                >
                    {title}
                </Text>
                <Text
                    fontSize='xs'
                    fontWeight='normal'
                    noOfLines={2}
                    overflow='hidden'
                    textOverflow='ellipsis'
                    color='#a6a6a6'
                >
                    {content}
                </Text>
            </Stack>
        </Stack>
    )
}

export default React.memo(NewsItem)
