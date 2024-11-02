// App.jsx
import { Box, Button, Flex, Heading, Image, Text, Stack, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import HeroImage from '../assets/hero.png';
import Cross from '../assets/cross.png';
import Children from '../assets/children2.png';
import Help from '../assets/joel-muniz2.png';
import { Link } from "react-router-dom";

// MotionBox allows Chakra components to have Framer Motion props
const MotionBox = motion(Box);

function App() {
  return (
    <Box as="main" color="gray.800" minH="100vh">
      {/* Hero Section */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        bg="blue.500"
        h={{ base: "50vh", md: "70vh" }}
        p={8}
        textAlign="center"
        backgroundImage={{ base: `url(${Cross})`, md: `url(${HeroImage})` }}
        backgroundSize="cover"
        backgroundPosition={{ base: "center", md: "right center" }}
        position="relative"
      >
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading as="h1" size={{ base: "lg", md: "2xl" }} mb={4} mt={{ base: "2", md: "0" }} color="white">
            Transforming lives through <br /> compassionate service
          </Heading>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            mb={2}
            color={{ base: 'msn.400', md: '#232425' }}
            fontFamily="fonts.heading"
            fontWeight="bold"
          >
            The Missionary Servants of the Needy empower hope and uplift communities in need.
          </Text>
          <Button as={Link} mb={{ base: "5", md: "0" }} to="/join-us" size="md" variant="ghost" color="white" outlineColor="blue">
            Join Us
          </Button>
        </MotionBox>
      </Flex>

      {/* After Hero Section */}
      <Flex
        alignItems="center"
        justify="space-between"
        bg="msn.500"
        color="white"
        h={{ base: "auto", md: "20vh" }}
        px={8}
        direction={{ base: "column", md: "row" }}
        py={{ base: 5, md: 3 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading as="h1" size="sm" mb={4} color="msn.400">
            Give what you have decided in your heart,<br />
            not reluctantly or under compulsion for God loves a cheerful giver
          </Heading>
          <Text fontSize="xl" color="#232425" fontFamily="fonts.heading" fontWeight={800}>
            <i>2 Cor. 9:7</i>
          </Text>
        </MotionBox>
        <Button as={Link} to="/donate" size="md" bgColor="blue" variant="ghost" color="white">
          Donate
        </Button>
      </Flex>

      {/* Who We Are Section */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 4, md: 8 }}
        py={{ base: 8, md: 16 }}
        px={{ base: 4, md: 8 }}
        align="center"
        justify="center"
        bg="gray.50"
      >
        <VStack align="start" spacing={{ base: 4, md: 4 }} w={{ base: '100%', md: '50%' }}>
          <Heading as="h2" size="lg" color="msn.400">
            Who We Are
          </Heading>
          <Text fontSize="md" textAlign="justify">
            The Missionary Servants of the Needy (MSN)
            is a Roman Catholic male religious association founded 
            exclusively to help the poor and serve their needs. Anyone 
            who wishes to participate in this so divinely motivated
            mission or become a member of the Missionary Servants
            of the Needy must, as a matter of fact, inculcate a burning
            desire for working with the poor and the needy. He must 
            see the priesthood of Jesus Christ and apostolic life from
            the perspective of service, not acquisition of honor and/or
            wealth. He must be deeply committed to sacrificing
            a greater part of his material and spiritual possessions 
            for the good of the most disadvantaged people.
          </Text>
        </VStack>

        <VStack align="start" spacing={{ base: 4, md: 4 }} w={{ base: '100%', md: '50%' }}>
          <Heading as="h2" size="lg" color="msn.400">
            Our Purpose
          </Heading>
          <Text fontSize="md" textAlign="justify">
            Our mission is to serve those in need with unwavering
            compassion and hope. strive to uplift lives by providing 
            essential resources and support. dedicated outreach,
            we create lasting change in the communities we serve.
            Together, we can make a meaningful difference for
            the vulnerable and neglected.
          </Text>
          <Image src={Children} mt={5} w={{ base: "100%", md: "80%" }} />
        </VStack>
      </Stack>

      {/* Get Help Now Section */}
      <Flex
        bg="white"
        py={8}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
      >
        <Box w={{ base: "100%", md: "50%" }} mb={{ base: 6, md: 0 }}>
          <Heading as="h3" color="msn.400" size="lg" my={4}>
            You Are Not Alone
          </Heading>
          <Text fontSize="md" mb={6} color="black">
            If you're facing severe poverty and struggling to
            meet basic needs like food or shelter, we are here
            to help. Click the button below to request urgent 
            support, and we will do our best to assist you 
            quickly          
          </Text>
          <Button as={Link} to="/support" size="md" bgColor="blue" variant="ghost" color="white">
            Get Help Now
          </Button>
        </Box>
        <Box w={{ base: "100%", md: "50%" }}>
          <Image src={Help} w="100%" h="100%" />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
