import React from 'react'
import ROUTE from '../../../routes/route'
import { Link } from 'react-router-dom'
import { Image, Stack, Text } from '@chakra-ui/react'

type ArticleItemProps = {
    image: string
    title: string
    type: 'internal' | 'external'
    source: string
    slug: string
    id: string
    description: string
}

function ArticleItem(props: ArticleItemProps) {
    const { image, title, type, source, id, description } = props

    return (
        <Stack
            as={Link}
            to={type === 'external' ? source : ROUTE?.articleDetail?.replace(':articleId', id)}
            target={type === 'external' ? '_blank' : '_self'}
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
                    {description}
                </Text>
            </Stack>
        </Stack>
    )
}

export default React.memo(ArticleItem)
