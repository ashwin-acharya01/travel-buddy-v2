import React from 'react';
import { Box, Divider, Textarea, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, } from '@chakra-ui/react';
import { placeDetails } from '../../constants';
import { Navbar, TextEditor } from '../../components';

const PlanTrip = () => {
  const [title, setTitle] = React.useState(
    'Trip to ' + placeDetails.name.toUpperCase()
  );
  const [notes, setNotes] = React.useState("");

  React.useEffect(() => {
    console.log(notes);
  }, [notes])

  return (
    <Box w="100%">
      <Navbar />
      <Box
        width="80%"
        maxwidth="80%"
        display="flex"
        flexDir={'column'}
        bg="gray.100"
        mx="auto"
        borderRadius="lg"
        p="10px"
      >
        <Box
          maxHeight="300px"
          h="300px"
          w="100%"
          backgroundImage={placeDetails.cover_image}
          backgroundSize="cover"
          display="flex"
          alignItems="end"
          justifyContent="center"
          borderRadius="lg"
        >
          <Textarea
            value={title}
            onChange={e => setTitle(e.target.value)}
            height="5rem"
            width="70%"
            resize="none"
            fontSize="40px"
            fontWeight="bold"
            bg="white"
            textAlign="center"
            mb="-1rem"
          />
        </Box>
        <Divider my="2rem" bgColor="black" />
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem borderRadius="lg" my="1rem">
            <h2>
              <AccordionButton bgColor="white" height="5rem" _hover={{backgroundColor: "white"}} borderRadius="lg">
                <Box as="span" flex="1" textAlign="left" fontWeight="bold" fontSize="26px">
                  Places to visit
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="14px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my="1rem">
            <h2>
              <AccordionButton bgColor="white" height="5rem" _hover={{backgroundColor: "white"}} borderRadius="lg">
                <Box as="span" flex="1" textAlign="left" fontWeight="bold" fontSize="26px">
                  Lodging
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="14px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my="1rem">
            <h2>
              <AccordionButton bgColor="white" height="5rem" _hover={{backgroundColor: "white"}} borderRadius="lg">
                <Box as="span" flex="1" textAlign="left" fontWeight="bold" fontSize="26px">
                  Transport
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="14px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my="1rem">
            <h2>
              <AccordionButton bgColor="white" height="5rem" _hover={{backgroundColor: "white"}} borderRadius="lg">
                <Box as="span" flex="1" textAlign="left" fontWeight="bold" fontSize="26px">
                  Per-day Planning
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="14px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my="1rem">
            <h2>
              <AccordionButton bgColor="white" height="5rem" _hover={{backgroundColor: "white"}} borderRadius="lg">
                <Box as="span" flex="1" textAlign="left" fontWeight="bold" fontSize="26px">
                  Notes
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={"1rem"} fontSize="14px" bg="#fff">
              <TextEditor onTextChangeFunction={(val) => setNotes(val)}/>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my="1rem">
            <h2>
              <AccordionButton bgColor="white" height="5rem" _hover={{backgroundColor: "white"}} borderRadius="lg">
                <Box as="span" flex="1" textAlign="left" fontWeight="bold" fontSize="26px">
                  Budget
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="14px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button bgColor="black" color="white" borderRadius="lg" width="5rem" mt="1rem">Save</Button>
      </Box>
    </Box>
  );
};

export default PlanTrip;
