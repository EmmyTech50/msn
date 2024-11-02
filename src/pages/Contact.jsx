import React from 'react';
import {
  Stack,
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Icon,
  SimpleGrid,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <Box p={{ base: 4, md: 8 }} bg="gray.50" minH="100vh">
      {/* Contact Us Section */}
      <Box py={8} textAlign="center">
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">Contact Us</Text>
        <Text mt={4}>Any question or remarks? Just write us a message!</Text>
      </Box>

      {/* Main Container for Contact Information and Form */}
      <Flex justify="center" align="center" py={8} wrap="wrap">
        <Box
          w={{ base: '100%', lg: '900px' }}
          p={4}
          bg="white"
          rounded="md"
          borderWidth="1px"
          boxShadow="lg"
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          {/* Contact Information Box */}
          <Box
            w={{ base: '100%', md: '40%' }}
            p={8}
            bg="msn.400"
            color="white"
            rounded="md"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            mb={{ base: 8, md: 0 }}
            mr={{ base: 0, md: 8 }}
          >
            <Text fontSize="xl" mb={4} fontWeight="bold">Contact Information</Text>
            <VStack align="start" spacing={4}>
              <HStack>
                <Icon as={FaPhoneAlt} />
                <Text>+012 3456 789</Text>
              </HStack>
              <HStack>
                <Icon as={FaEnvelope} />
                <Text>demo@gmail.com</Text>
              </HStack>
              <HStack>
                <Icon as={FaMapMarkerAlt} />
                <Text>132 Dartmouth Street, Boston, MA 02156, USA</Text>
              </HStack>
            </VStack>
            <HStack mt={8} spacing={4}>
              <Icon as={FaFacebook} boxSize={6} cursor="pointer" color="blue" />
              <Icon as={FaTwitter} boxSize={6} cursor="pointer"  color="blue"/>
              <Icon as={FaInstagram} boxSize={6} cursor="pointer"  color="blue"/>
            </HStack>
          </Box>

          {/* Form Box */}
          <Box
            w={{ base: '100%', md: '60%' }}
            p={8}
            bg="white"
            rounded="md"
            borderWidth="1px"
            boxShadow="sm"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl id="first-name">
                <FormLabel fontSize="sm">First Name</FormLabel>
                <Input type="text" variant="flushed" placeholder="First Name" />
              </FormControl>
              <FormControl id="last-name">
                <FormLabel fontSize="sm">Last Name</FormLabel>
                <Input type="text" variant="flushed" placeholder="Last Name" />
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" variant="flushed" placeholder="Email Address" />
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Phone Number</FormLabel>
                <Input type="tel" variant="flushed" placeholder="Phone Number" />
              </FormControl>
            </SimpleGrid>

            <FormControl id="subject" mt={4}>
              <FormLabel>Select Subject</FormLabel>
              <RadioGroup defaultValue="general">
                <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                  <Radio value="general">General Inquiry</Radio>
                  <Radio value="join">Join Us</Radio>
                  <Radio value="help">Need Help</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>


            <FormControl id="message" mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Write your message..." variant="flushed" />
            </FormControl>

            <Flex justify="flex-end">
              <Button
                bgColor="blue"
                color="white"
                mt={6}
                width={{ base: "100%", md: "50%" }} // 100% width on mobile, 50% on larger screens
                
              >
                Send Message
              </Button>
            </Flex>

          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactPage;
