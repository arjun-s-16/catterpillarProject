// src/components/NavBar.jsx

import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="md" color="white">
          Team 7
        </Heading>
        <Spacer />
        <Box>
          <Flex alignItems="center">
            <Button onClick={()=>handleClick("profile")} color="gray" mr={4}>
              Home
            </Button>
            <Button onClick={()=>handleClick("/inspect")} color="gray" mr={4}>
              Inspect
            </Button>
            <Button onClick={()=>handleClick("/login")} color="gray" mr={4}>
              Logout
            </Button>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              color="white"
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default NavBar;
