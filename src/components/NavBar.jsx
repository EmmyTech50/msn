import { Flex, Button, Box, Image, Text, IconButton, Collapse } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';

import Logo from '../assets/logo.png';

function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex as="nav" bg="msn.400" color="white" p={4} justify="space-between" align="center">
      <Button as={Link} to="/" variant="link" colorScheme="gray.200" display={{ base: "block", md: "flex" }}>
        <Image src={Logo} alt="Logo" boxSize={10} />
        <Text textTransform="uppercase" mx={2} display={{ base: "none", md: "block" }}>
          The Missionary Servants <br /> of the Needy
        </Text>
      </Button>
      
      {/* Hamburger Menu Button for Mobile */}
      <IconButton
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="outline"
        colorScheme="gray.200"
        onClick={onToggle}
        display={{ base: "block", md: "none" }} // Show only on mobile
        aria-label="Toggle Navigation"
      />

      {/* Links Container */}
      <Collapse in={isOpen} animateOpacity>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          gap={4}
          mt={{ base: 4, md: 0 }} // Add margin on mobile
        >
          <Button as={Link} to="/about" variant="link" colorScheme="gray.200">
            About
          </Button>
          <Button as={Link} to="/join-us" variant="link" colorScheme="gray.200">
            Join Us
          </Button>
          <Button as={Link} to="/contact" variant="link" colorScheme="gray.200">
            Contact
          </Button>
          <Button as={Link} to="/donate" variant="outline" colorScheme="gray.200">
            Donate
          </Button>
        </Flex>
      </Collapse>

      {/* Desktop Links */}
      <Flex display={{ base: "none", md: "flex" }} gap={6}>
        <Button as={Link} to="/about" variant="link" colorScheme="gray.200">
          About
        </Button>
        <Button as={Link} to="/join-us" variant="link" colorScheme="gray.200">
          Join Us
        </Button>
        <Button as={Link} to="/contact" variant="link" colorScheme="gray.200">
          Contact
        </Button>
        <Button as={Link} to="/donate" outlineColor="blue" colorScheme="gray.200">
          Donate
        </Button>
      </Flex>
    </Flex>
  );
}

export default NavBar;
