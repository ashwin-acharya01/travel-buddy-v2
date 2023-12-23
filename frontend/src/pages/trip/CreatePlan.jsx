import React from 'react'
import { Box, Text, Flex, Button, Input } from '@chakra-ui/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';
import { places } from '../../constants';
import { Navbar } from '../../components';
import { useNavigate } from 'react-router-dom';

const CreatePlan = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const navigate = useNavigate();
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const [showCalendar, setShowCalendar] = React.useState(false);

  function formatDate(date) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  React.useEffect(() => {
    if(Array.isArray(date) && date.length == 2) setShowCalendar(false);
  }, [date])

  return (
    <Box>
      <Navbar/>
      <Box display="flex" justifyContent="center" alignItems="center" width="100%" mt="2rem">
        <Box>
          <Text fontSize="40px" fontWeight="semibold">Plan a New Trip</Text>
          <Flex flexDir="column" mt="2rem" gap="2rem" width="400px">
            <Box>
              <Text fontWeight="semibold" fontSize="15px">Select a Place</Text>
              <Select
                value={selectedOption}
                onChange={handleChange}
                options={places}
                placeholder="Select a place"
              />
            </Box>
            <Box>
              <Text fontWeight="semibold" fontSize="15px">Select a Date <Box as="span" fontSize="13px">(Optional)</Box></Text>
              <Input placeholder="select date" value={Array.isArray(date)  ? `${date[0].toString()} to ${date[1].toString()}`  : null} isReadOnly onFocus={() => setShowCalendar(true)} />
              <Box>
              {
                (showCalendar) && (
                  <Calendar
                    onChange={setDate}
                    value={date}
                    selectRange={true}
                  />
                )
              }
              </Box>
            </Box>
            <Button borderRadius="lg" backgroundColor="black" color="white" onClick={() => navigate('/plan')} isDisabled={selectedOption === null}>Create a Plan</Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default CreatePlan