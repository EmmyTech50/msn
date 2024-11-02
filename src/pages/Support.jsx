import React from 'react'
import {
  Box,
  Text,
  Heading,
  VStack,
  Image,
  HStack,
  List,
  ListItem,
  Button
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import children2 from "../assets/children2.png";
import card1 from "../assets/card-image (1).png";
// import children2 from "../assets/children2.png";
// import children2 from "../assets/children2.png";


function Support() {
  return (
    <>
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
          color="white"
          textAlign="center"
        >
          <VStack spacing={4}>
            <Text fontSize="lg" fontWeight="bold">
              Truly, I tell you, whatever you did for one of the least of these brothers
              and sisters of mine, you did for Me
            </Text>
            <Text fontSize="lg">Matthew 25:40</Text>
            <ArrowDownIcon w={6} h={6} />
          </VStack>
        </Box>

        {/* Mission Statement Section */}
        <Box bg="gray.700" color="white" p={10} textAlign="center">
          <Heading size="lg" mb={4}>
            MSN Support System (MSNSS)
          </Heading>
          <Text maxW="800px" mx="auto" fontSize="md">
            The MSN Support System is the official channel through which the Missionary
            Servants of the Needy offer assistance to indigent children, poor orphans,
            widows, and those marginalized by society. Our mission is to provide aid to
            those in genuine need, with a special focus on empowering youth through
            education and vocational training.
          </Text>
        </Box>

        {/* Services Section */}
        <Box p={10} bg="white" textAlign="center">
          <Heading size="lg" mb={6} color="purple.800">
            What We Offer
          </Heading>
          <HStack spacing={8} justify="center" wrap="wrap">
            {/* Card 1 */}
            <Box
              bg="gray.100"
              p={4}
              borderRadius="md"
              boxShadow="md"
              maxW="250px"
              w="100%"
              textAlign="center"
              display="flex"
              flexDirection="column"
              h="300px" // Set a fixed height to ensure 50% split is consistent
            >
              <Image
                src={card1}
                alt="Education"
                w="100%"
                h="50%" // Takes 50% of the card height
                objectFit="cover"
                borderRadius="md"
                mb={3}
              />
              <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
                <Heading size="md" mb={2}>
                  Education
                </Heading>
                <Text fontSize="sm">Full and partial scholarships for education</Text>
              </Box>
            </Box>

            {/* Card 2 */}
            <Box
              bg="gray.100"
              p={4}
              borderRadius="md"
              boxShadow="md"
              maxW="250px"
              w="100%"
              textAlign="center"
              display="flex"
              flexDirection="column"
              h="300px"
            >
              <Image
                src={card1}
                alt="Business"
                w="100%"
                h="50%"
                objectFit="cover"
                borderRadius="md"
                mb={3}
              />
              <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
                <Heading size="md" mb={2}>
                  Business
                </Heading>
                <Text fontSize="sm">
                  We provide support and resources to help you start your own business
                </Text>
              </Box>
            </Box>

            {/* Card 3 */}
            <Box
              bg="gray.100"
              p={4}
              borderRadius="md"
              boxShadow="md"
              maxW="250px"
              w="100%"
              textAlign="center"
              display="flex"
              flexDirection="column"
              h="300px"
            >
              <Image
                src={card1}
                alt="Training"
                w="100%"
                h="50%"
                objectFit="cover"
                borderRadius="md"
                mb={3}
              />
              <Box flex="1" display="flex" flexDirection="column" justifyContent="center">
                <Heading size="md" mb={2}>
                  Training
                </Heading>
                <Text fontSize="sm">
                  Training in carpentry, plumbing, welding, and more
                </Text>
              </Box>
            </Box>
          </HStack>
        </Box>

        <VStack spacing={4} p={6} align="stretch">
          {/* Eligibility Section */}
          <Box bg="maroon" color="white" p={6} textAlign="center">
            <Heading size="md" mb={2}>Eligibility</Heading>
            <Text fontSize="sm">
              Our support is reserved for the economically disadvantaged. Applicants must
              demonstrate financial need and will be screened through a detailed process,
              including family background checks and interviews. Honesty and transparency
              are essential throughout the application.
            </Text>
          </Box>

          {/* Ineligibility Section */}
          <Box bg="gray.200" color="black" p={6} textAlign="center">
            <Heading size="md" mb={2}>Ineligibility</Heading>
            <Text fontSize="sm">
              Applicants are ineligible if they are financially stable, have capable family
              support, possess a violent or criminal background, or live outside regions where
              an MSNSS office is located. Our aid is reserved for those in genuine need within
              our service areas.
            </Text>
          </Box>

          {/* Application Process Section */}
          <Box bg="maroon" color="white" p={6} textAlign="center">
            <Heading size="md" mb={2}>Application Process</Heading>
            <List spacing={1} fontSize="sm" textAlign="left">
              <ListItem>1. Fill out the application forms</ListItem>
              <ListItem>2. Attend oral interviews</ListItem>
              <ListItem>3. Undergo a family visit and verification process</ListItem>
              <ListItem>4. Provide a recommendation letter from a religious or community leader</ListItem>
            </List>
          </Box>

          {/* Required Documents Section */}
          <Box bg="maroon" color="white" p={6} textAlign="center">
            <Heading size="md" mb={2}>Required Documents</Heading>
            <List spacing={1} fontSize="sm" textAlign="left">
              <ListItem>1. Educational certificates</ListItem>
              <ListItem>2. Baptismal or birth certificate</ListItem>
              <ListItem>3. National ID card</ListItem>
              <ListItem>4. Letters of recommendation from religious or community leaders</ListItem>
            </List>
          </Box>

          {/* Email Button Section */}
          <Box bg="gray.100" p={6} textAlign="center">
            <Text fontSize="sm" mb={4}>
              If you wish to apply for any of our offers, click the button below to email us directly.
            </Text>
            <Button bgColor="blue" color="#ffff" size="md">Email us</Button>
          </Box>
        </VStack>
    </>    
  );
}

export default Support;
