import React from 'react'
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { Navbar } from '../../components';
import travelImage from '../../images/travel-bg.jpg';

const LandingPage = () => {
  return (
    <Box width="100%" position="relative">
        <Image src={travelImage} position="fixed" top="0px" right="0px" zIndex="1" maxHeight="100vh"/>
        <Navbar zIndex={10} position="absolute" top="0" left="0" right="0" w="100%"/>
        <Box height="100vh" bg="white" pt="7rem" zIndex="2" position="relative" clipPath= 'polygon(0 0, 0 100%, 100% 100%, 60% 100%, 40% 0)'>
            <Box width="40%" ml="2rem" h="80vh" display="flex" flexDir="column" justifyContent="center">
                <Text fontWeight="700" fontSize="40px">You'll never travel without our trip planner again</Text>
                <Text mt="1rem">Build your itineraries using <Box as="span" fontWeight="800" fontSize="larger">TravelBuddy</Box>, designed for vacations & road trips</Text>
                <Button bg="black" color="white" px="10px" borderRadius="lg" width="10rem" mt="1rem" _hover={{background: "black", transform: 'scale(1.1)'}}>Start Planning</Button>
            </Box>
        </Box>
        <Box></Box>
    </Box>
  )
}

export default LandingPage