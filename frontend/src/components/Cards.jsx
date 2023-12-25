import React from 'react';
import {
  Box,
  Img,
  Image,
  Text,
  Flex,
  Button,
  Center,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import {
  BsAirplane,
  BsTrainFront,
  BsCarFront,
  BsPersonWalking,
} from 'react-icons/bs';
import Carousel from './Carousel';

export const PlaceCard = ({
  img,
  title,
  description,
  onAdd,
}) => {
  const [readmore, setReadmore] = React.useState(false);
  console.log(img[0])
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      padding="1rem"
      h="300px"
      w="250px"
      minW="250px"
      maxWidth="250px"
      maxHeight="300px"
      borderRadius="lg"
      boxShadow="lg"
      gap="0.625rem"
      position="relative"
      bg="#fff"
    >
      <Center
        padding="1rem"
        boxSize="3rem"
        position="absolute"
        top="-0.8rem"
        right="-0.8rem"
        onClick={onAdd}
        borderRadius="full"
        boxShadow="lg"
        bgColor="#000"
        color="#fff"
        fontSize="26px"
        cursor="pointer"
      >
        +
      </Center>
      <Image
        src={img[0]}
        alt={`image-${title}`}
        w="100%"
        h="120px"
        maxH="120px"
        borderRadius="lg"
      />
      <Text fontWeight="500" w="100%">
        {title}
      </Text>
      <Text fontSize="13px">
        {description.substring(0, Math.min(description.length, 60)) + "..."}
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
        <ModalContent maxH="80vh" overflowY="auto">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding="2rem">
            <Box>
                <Carousel imageArray={img} w="90%" h="250px" maxHeight="250px" mx="auto" my="1rem"/>
                <Text>{description}</Text>
            </Box>
          </ModalBody>
          <ModalFooter ml="auto">
            <Button colorScheme="blue" mr={3} onClick={onAdd}>
              Visit Place
            </Button>
            <Button variant="ghost" onClose={() => setReadmore(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export const LocationCard = ({ modeOfTransport }) => {
  let choice;
  switch (modeOfTransport) {
    case 'flight':
      choice = <BsAirplane size="80px" />;
      break;
    case 'car':
      choice = <BsCarFront size="80px" />;
      break;
    case 'train':
      choice = <BsTrainFront size="80px" />;
      break;
    case 'walk':
      choice = <BsPersonWalking size="80px" />;
      break;
    default:
      choice = <BsAirplane size="80px" />;
      break;
  }
  return (
    <Stack
      padding="1rem"
      justifyContent="center"
      alignItems="center"
      h="120px"
      w="120px"
      maxH="120px"
      maxW="120px"
    >
      {choice}
    </Stack>
  );
};

export const LodgingCard = ({
  img,
  title,
  description,
  onAdd,
  deatailedDescription,
  lodgingDetails,
  price
}) => {
  const [getDetails, setGetDetails] = React.useState(false);
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
        onClick={() => setGetDetails(true)}
      >
        <FaPlus />
      </Center>
      <Img
        src={img[0]}
        alt={`image-${title}`}
        w="100%"
        maxH="100px"
        borderRadius="lg"
      />
      <Text alignItems="center" fontWeight="500">
        {title}
      </Text>
      <Text fontSize="13px" textAlign={'center'}>
        {description.substring(0, Math.min(description.length, 60))}
      </Text>
      <Button
        variant="link"
        ml="auto"
        color="#0087ee"
        onClick={() => setGetDetails(true)}
      >
        Read more
      </Button>

      <Modal isOpen={getDetails} onClose={() => setGetDetails(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding="1rem">
            <Carousel imageArray={img} w="90%" mx="auto" my="1rem"/>
            <Text>{description}</Text>
            <Text mt="1.5rem" fontWeight="bold" fontSize="16px">Price</Text>
            <Flex alignItems="center" justifyContent="space-between">
                <Text>Children<span style={{fontWeight: "semi-bold"}}>{price.children}</span></Text>
                <Text>Adults<span style={{fontWeight: "semi-bold"}}>{price.adult}</span></Text>
            </Flex>
          </ModalBody>
          <ModalFooter ml="auto">
            <Button colorScheme="blue" mr={3} onClick={onAdd}>
                Add Hotel
            </Button>
            <Button variant="ghost" onClose={setGetDetails(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
