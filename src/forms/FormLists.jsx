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

export default function FormLists() {
  return (
      <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Hai, Name
      </Heading>
      <Stack ml={200} width={"1000px"} spacing={4}>
        <Card>
          <CardHeader>
            <Heading size="md">Tires</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fiil details about tires</Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Battery</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fiil details about Battery</Text>
          </CardBody>
        </Card><Card>
          <CardHeader>
            <Heading size="md">Exterior</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fiil details about Exterior</Text>
          </CardBody>
        </Card><Card>
          <CardHeader>
            <Heading size="md">Brakes</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fiil details about Brakes</Text>
          </CardBody>
        </Card><Card>
          <CardHeader>
            <Heading size="md">Brakes</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fiil details about Brakes</Text>
          </CardBody>
        </Card><Card>
          <CardHeader>
            <Heading size="md">Tires</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fiil details about tires</Text>
          </CardBody>
        </Card><Card>
          <CardHeader>
            <Heading size="md">Tires</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fiil details about tires</Text>
          </CardBody>
        </Card><Card>
          <CardHeader>
            <Heading size="md">Tires</Heading>
          </CardHeader>
          <CardBody>
            <Text>Fiil details about tires</Text>
          </CardBody>
        </Card>
        
        {/* Repeat this pattern for each of the remaining cards */}
      </Stack>
    </Box>

  );
}

