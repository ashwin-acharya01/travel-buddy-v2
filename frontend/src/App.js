import React from 'react';
import './App.css';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { Places, Home, LandingPage, CreatePlan, CreateReview, PlanTrip } from './pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/places/:id" element={<Places/>} />
            <Route path="/create/plan" element={<CreatePlan />} />
            <Route path="/create/review" element={<CreateReview />} />
            <Route path="/plan/:pathParam1?/:pathParam2?" element={<PlanTrip />} />
           </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
