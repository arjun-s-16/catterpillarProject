// src/pages/PageComponent.jsx

import React from 'react';
import {
  Box,
  Heading,
  Stack,
  Text,
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Container,
} from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import GeneratePDF from '../GeneratePDF';

export default function FormLists() {

  const navigate = useNavigate();

  const curPath = useLocation().pathname;
  function handleClick(path){
    navigate(curPath + path);
  }

  return (
      <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Hai, Name
      </Heading>
      <Stack ml={200} width={"1000px"} spacing={4}>
        <Card onClick={()=>handleClick("/tires")}>
          <CardHeader>
            <Heading size="md">Tires</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fill details about tires</Text>
          </CardBody>
        </Card>
        <Card onClick={()=>handleClick("/battery")}>
          <CardHeader>
            <Heading size="md">Battery</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fill details about Battery</Text>
          </CardBody>
        </Card>
        <Card onClick={()=>handleClick("/exterior")}>
          <CardHeader>
            <Heading size="md">Exterior</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fill details about Exterior</Text>
          </CardBody>
        </Card>
        <Card onClick={()=>handleClick("/brakes")}>
          <CardHeader>
            <Heading size="md">Brakes</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fill details about Brakes</Text>
          </CardBody>
        </Card>
        <Card onClick={()=>handleClick("/engine")}>
          <CardHeader>
            <Heading size="md">Engine</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fill details about Engine</Text>
          </CardBody>
        </Card>
        <Card onClick={()=>handleClick("/feedback")}>
          <CardHeader>
            <Heading size="md">Feedback</Heading>
          </CardHeader>
          <CardBody>
            <Text>Voice of customer</Text>
          </CardBody>
        </Card>
      </Stack>
      <GeneratePDF/>
    </Box>

  );
}

