import React from 'react'
import {  Box, Text, Heading, VStack } from "@chakra-ui/react";
import children2 from '../assets/children2.png'

function Donate() {
  return (
    
    <Box
    bgImage={children2}
    bgPosition="center"
    bgSize="cover"
    width="full"
    minH="500px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    position="relative"
    p={6}
    color="white"
  >
    <VStack spacing={4} textAlign="center" maxW="600px">
      {/* Main Heading */}
      <Heading size="2xl">Your Support, Their Future</Heading>

      {/* Bank Details Box */}
      <Box
        bg="rgba(255, 255, 255, 0.8)"
        color="black"
        p={6}
        borderRadius="md"
        boxShadow="md"
        width="full"
        maxW="400px"
      >
        <VStack spacing={3}>
          <Text fontSize="lg" fontWeight="bold">
            Bank Name: Wells Fargo Bank
          </Text>
          <Text>Account Number: 9290018028</Text>
          <Text>Account Name: Missionary Servants of the Needy</Text>
          <Text>Routing Number: 111900659</Text>
        </VStack>
      </Box>
    </VStack>
  </Box>
  )
}

export default Donate