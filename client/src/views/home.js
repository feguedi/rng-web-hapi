import React, { useState, useEffect } from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    VStack,
} from '@chakra-ui/react'

const Home = () => {
    const [datos, setDatos] = useState({})
    const { onOpen, onClose, isOpen } = useDisclosure()

    useEffect(() => {
        console.log('Se cambiaron los datos:', datos)
    }, [datos])

    return (
        <>
            <VStack>
                <Button onClick={onOpen}>Open Modal</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <h4>Contenido del modal</h4>
                    </ModalBody>

                    <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
                </Modal>
            </VStack>
        </>
    )
}

export default Home
