import React from 'react'
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import Login from '../components/Auth/Login';
import Registro from '../components/Auth/Registro';

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >  
      <center><Text fontSize="4xl" fontFamily="Work sans" >Talk-App</Text></center> 
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
      <Tabs isFitted variant="soft-rounded">
        <TabList>
    <Tab>Login</Tab>
    <Tab>Registro</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
      </TabPanel>
    <TabPanel>
      <Registro/>
      </TabPanel>
  </TabPanels>
      </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage