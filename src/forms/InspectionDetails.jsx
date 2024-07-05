// src/components/LoginForm.jsx

import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Container,
  Input,
  Button,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function InspectionDetails() {
  const [truckSerialNo, setTruckSerialNo] = useState('');
  const [truckModel, setTruckModel] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [catCustomerId, setCatCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', {
      truckSerialNo,
      truckModel,
      dateTime,
      catCustomerId,
      customerName,
    });

    let id = generateRandomId(20);
    navigate("/inspect/"+id);

  };

  function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }
  
  // Example usage:
  const randomId = generateRandomId(10); // Generates a 10-character random ID
  console.log(randomId); // Example output: "783nfhef7n"
  
  return (
    <Container w="300px" centerContent mt="100px">

    <Box p={4} w="500px" borderWidth="1px" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl id="truckSerialNo">
            <FormLabel>Truck Serial No</FormLabel>
            <Input
              type="text"
              value={truckSerialNo}
              onChange={(e) => setTruckSerialNo(e.target.value)}
            />
          </FormControl>
          <FormControl id="truckModel">
            <FormLabel>Truck Model</FormLabel>
            <Input
              type="text"
              value={truckModel}
              onChange={(e) => setTruckModel(e.target.value)}
            />
          </FormControl>
          <FormControl id="dateTime">
            <FormLabel>Date and Time</FormLabel>
            <Input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
            />
          </FormControl>
          <FormControl id="location">
            <FormLabel>Location</FormLabel>
            <Input
              type="text"
              value={""}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FormControl>
          <FormControl id="catCustomerId">
            <FormLabel>CAT Customer ID</FormLabel>
            <Input
              type="text"
              value={catCustomerId}
              onChange={(e) => setCatCustomerId(e.target.value)}
            />
          </FormControl>
          <FormControl id="customerName">
            <FormLabel>Customer Name</FormLabel>
            <Input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
    </Container>
  );
}

export default InspectionDetails;
