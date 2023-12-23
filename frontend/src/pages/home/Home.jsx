import { Box, Text, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../components'

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
        <Navbar />
        <Box p="1rem 2rem">
            <Text fontSize="60px" fontWeight="bold">Hey There, Ashwin</Text>
            <Text fontSize="larger" fontWeight="500">Glad to see you back !</Text>
            <Flex gap="1rem" mt="1rem">
                <Button bgColor="black" color="white" width="8rem" onClick={() => navigate('/create/plan')}>Plan Trip</Button>
                <Button bgColor="black" color="white" width="8rem" onClick={() => navigate('create/review')}>Write a review</Button>
            </Flex>
            
            <Box mt="2rem">
                <Text fontSize="32px" fontWeight={"bold"}>Recommended for you</Text>
                
            </Box>
        </Box>
    </Box>
  )
}

export default Home