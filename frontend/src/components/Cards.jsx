import React from 'react';
import { 
    Box, 
    Img, 
    Text, 
    Button, 
    Center,
    Stack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { BsAirplane, BsTrainFront, BsCarFront, BsPersonWalking } from "react-icons/bs";

export const PlaceCard = ({
  img,
  title,
  description,
  onAdd,
  deatailedDescription,
}) => {
  const [readmore, setReadmore] = React.useEffect(false);
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      padding="1rem"
      maxWidth="200px"
      maxHeight="220px"
      borderRadius="lg"
      boxShadow="lg"
      gap="0.625rem"
      position="relative"
    >
      <Center
        padding="1rem"
        boxSize="2rem"
        position="absolute"
        top="-0.5rem"
        right="-0.5rem"
        onClick={onAdd}
      >
        <FaPlus />
      </Center>
      <Img
        src={img}
        alt={`image-${title}`}
        w="100%"
        maxH="100px"
        borderRadius="lg"
      />
      <Text alignItems="center" fontWeight="500">
        {title}
      </Text>
      <Text fontSize="13px" textAlign={'center'}>
        {description}
      </Text>
      <Button
        variant="link"
        ml="auto"
        color="#0087ee"
        onClick={() => setReadmore(true)}
      >
        Read more
      </Button>
      
      <Modal isOpen={readmore} onClose={() => setReadmore(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding="1rem">
            {deatailedDescription}
          </ModalBody>
          <ModalFooter ml="auto">
            <Button colorScheme="blue" mr={3} onClick={onAdd}>
              Visit Place
            </Button>
            <Button variant="ghost" onClose={setReadmore(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export const LocationCard = ( {modeOfTransport} ) => {
    let choice;
    switch(modeOfTransport) {
        case 'flight' :
            choice = <BsAirplane size="80px"/>
            break;
        case 'car' :
            choice = <BsCarFront size="80px"/>
            break;
        case 'train' :
            choice = <BsTrainFront size="80px"/>
            break;
        case 'walk' :
            choice = <BsPersonWalking size="80px"/>
            break;
        default :
            choice = <BsAirplane size="80px"/>
            break;
    }
    return (
        <Stack padding="1rem" justifyContent="center" alignItems="center" h="120px" w="120px" maxH="120px" maxW="120px">
            {choice}
        </Stack>
    );
}



