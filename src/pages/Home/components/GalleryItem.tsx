import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { 
    Image, 
    Stack, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalBody, 
    ModalCloseButton, 
    useDisclosure, 
    Text, 
    Icon, 
} from '@chakra-ui/react'
import ROUTE from '../../../routes/route'

type GalleryItemProps = {
    image: string
    title: string
}

function GalleryItem(props: GalleryItemProps) {
    const { image, title } = props

    const showModal = useDisclosure()
    const location = useLocation()

    return (
        <Stack
            as='article'
            spacing='1rem'
            width='100%'
            cursor='pointer'
            transition='.3s'
            onClick={showModal?.onOpen}
            _hover={{
                transform: 'translateY(-.25rem)',
            }}
        >
            <Image
                src={image}
                height='250px'
                objectFit='cover'
            />
            {location?.pathname === ROUTE?.home
                ?   null
                :   <Stack spacing='.25rem'>
                        <Text
                            fontSize='sm'
                            fontWeight='normal'
                            noOfLines={2}
                            overflow='hidden'
                            textOverflow='ellipsis'
                            color='#a6a6a6'
                        >
                            {title}
                        </Text>
                    </Stack>
            }

            <Modal
                isOpen={showModal?.isOpen}
                onClose={showModal?.onClose}
                size='xl'
            >
                <ModalOverlay
                    background='rgba(0, 0, 0, 0.5)'
                    backdropFilter='auto'
                    backdropBlur='.5rem'
                />
                <ModalContent overflow='hidden'>
                    {/* <ModalHeader></ModalHeader> */}
                    <ModalCloseButton
                        bg='blackAlpha.100'
                        _hover={{
                            bg: 'blackAlpha.300',
                        }}
                    >
                        <Icon
                            as={FaRegTimesCircle}
                            fontSize='20px'
                            color='gray.800'
                        />
                    </ModalCloseButton>
                    <ModalBody
                        display='flex'
                        flexDirection='column'
                        padding='0'
                        gap='0'
                    >
                        <Image
                            src={image}
                            height='300px'
                            width='100%'
                            objectFit='cover'
                        />
                        <Stack
                            spacing='1rem'
                            padding='1rem'
                        >
                            <Text>{title}</Text>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Stack>
    )
}

export default React.memo(GalleryItem)
