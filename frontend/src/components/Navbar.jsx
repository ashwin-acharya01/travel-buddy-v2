import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import ColorModeSwitcher  from './ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <Flex alignItems="center" width="100%" height="5rem" px="2rem" {...props}>
        <Box>
            <Text fontWeight="700" fontSize="larger" zIndex={10} position="relative" color="black">TravelBuddy</Text>
        </Box>
        <Flex gap="1rem" ml="auto">
            <Button borderRadius="lg" boxShadow="lg" onClick={() => navigate('/home')}>Register</Button>
            <Button borderRadius="lg" boxShadow="lg">Sign In</Button>
        </Flex>
        {/* <Box>
            <ColorModeSwitcher justifySelf="flex-end" />
        </Box> */}
    </Flex>
  )
}

export default Navbar