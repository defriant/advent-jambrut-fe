import React from 'react'
import { 
    Skeleton, 
    SkeletonText, 
    Stack, 
} from '@chakra-ui/react'

function NewsSkeleton() {
    return (
        <Stack spacing='0.5rem'>
            <Skeleton height='250px' width='100%' />
            <SkeletonText noOfLines={2} skeletonHeight='24px' />
        </Stack>
    )
}

export default React.memo(NewsSkeleton)