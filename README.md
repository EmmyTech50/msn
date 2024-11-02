# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


// ContactPage.js
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function ContactPage() {
  return (
    <Box bg="gray.50" py={12}>
      <Container maxW="container.xl">
        <Heading as="h1" size="xl" textAlign="center" color="maroon.700" mb={4}>
          Contact Us
        </Heading>
        <Text textAlign="center" color="gray.600" mb={10}>
          Any question or need help? Just write us a message!
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {/* Left Side - Contact Information */}
          <Box bg="red" color="white" p={8} borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>
              Contact Information
            </Heading>
            <Text mb={6}>Say something to start a live chat!</Text>

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
                <Text>132 Dartmouth Street Boston, Massachusetts 02156 United States</Text>
              </HStack>
            </VStack>

            <HStack mt={8} spacing={4}>
              <Icon as={FaFacebook} boxSize={6} cursor="pointer" />
              <Icon as={FaTwitter} boxSize={6} cursor="pointer" />
              <Icon as={FaInstagram} boxSize={6} cursor="pointer" />
            </HStack>
          </Box>

          {/* Right Side - Contact Form */}
          <Box bg="white" p={8} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl id="first-name">
                <FormLabel>First Name</FormLabel>
                <Input placeholder="First Name" />
              </FormControl>
              <FormControl id="last-name">
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Last Name" />
              </FormControl>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Email" />
              </FormControl>
              <FormControl id="phone">
                <FormLabel>Phone Number</FormLabel>
                <Input type="tel" placeholder="+1 012 3456 789" />
              </FormControl>
            </SimpleGrid>
            <FormControl id="subject" mt={4}>
              <FormLabel>Select Subject</FormLabel>
              <RadioGroup defaultValue="general">
                <HStack spacing={4}>
                  <Radio value="general">General Inquiry</Radio>
                  <Radio value="join">Join Us</Radio>
                  <Radio value="help">Need Help</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <FormControl id="message" mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Write your message..." />
            </FormControl>
            <Button colorScheme="blue" mt={6} width="full">
              Send Message
            </Button>
          </Box>
        </SimpleGrid>

      </Container>
    </Box>
  );
}

export default ContactPage;
