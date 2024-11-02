import { Box, Button, Flex, Image, Text, IconButton, HStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social media icons
import React from 'react';
import Logo from '../assets/logo.png';

function Footer() {
  return (
    <Box bg="msn.400" color="gray.200" py={4} textAlign="center">
      <Box display='flex' flexDirection="column" alignItems='center' justifyContent='center'>
        <Image src={Logo} alt="Logo" boxSize={10} textAlign="center" />
        <Text textTransform={'uppercase'} mx={2} fontWeight='bold'>The Missionary Servants of the Needy</Text>
        <Text fontSize="sm">&copy; 2024 The Missionary Servants of the Needy. All rights reserved.</Text>
      </Box>

      <Flex mt={2} justify="center" gap={6}>
        <Button as="a" href="/about" variant="link" colorScheme="blue.500">
          About
        </Button>
        <Button as="a" href="/contact" variant="link" colorScheme="blue.500">
          Contact
        </Button>
        <Button as="a" href="/join-us" variant="link" colorScheme="blue.500">
          Join Us
        </Button>
        <Button as="a" href="/donate" variant="link" colorScheme="blue.500">
          Donate
        </Button>
      </Flex>

      {/* Social Media Icons */}
      <HStack mt={4} justify="center" spacing={4}>
        <IconButton 
          as="a" 
          href="https://facebook.com" 
          aria-label="Facebook" 
          icon={<FaFacebook />} 
          variant="link" 
          color="blue" 
        />
        <IconButton 
          as="a" 
          href="https://twitter.com" 
          aria-label="Twitter" 
          icon={<FaTwitter />} 
          variant="link" 
          color="blue"  
        />
        <IconButton 
          as="a" 
          href="https://instagram.com" 
          aria-label="Instagram" 
          icon={<FaInstagram />} 
          variant="link" 
          color="blue" 
        />
      </HStack>
    </Box>
  );
}

export default Footer;
