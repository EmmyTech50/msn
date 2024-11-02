import { Box, Flex, Text, Image } from "@chakra-ui/react";
import EwfnI from '../assets/EwfnI.png'
import OL3NXdEwfnI from '../assets/OL3NXdEwfnI-1.png'
import jesus from '../assets/jesus.png'

const EntranceCards = () => {
  return (
    <Box p={8} bg="white" color="black">
      {/* Header */}
      <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={4}>
        Entrance Requirements
      </Text>
      <Text textAlign="center" fontSize="lg" mb={8}>
        We seek individuals who are eager to dedicate their lives to service. Below are the key requirements:
      </Text>

       {/* Cards Container */}
    <Flex justify="space-around" wrap="wrap">
      {/* Card 1: Faith */}
      <Box
        bg="white"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        maxW="sm"
        width="100%"
        p={0} // Remove padding to make full use of space
        mb={4}
      >
        <Flex direction="column" height="100%">
          {/* Image Section */}
          <Box width="100%" height="50%">
            <Image
              src={OL3NXdEwfnI} // Replace with the actual image link
              alt="Faith"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          {/* Text Section */}
          <Flex
            direction="column"
            align="center"
            justify="center"
            p={4}
            height="50%"
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Faith
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="center">
              - Excellent and confirmed Christian values
              <br />
              - Eager to understand that our target is Christlikeness
              <br />
              - Commitment to grow in personal faith and service
            </Text>
          </Flex>
        </Flex>
      </Box>

      {/* Card 2: Academics */}
      <Box
        bg="white"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        maxW="sm"
        width="100%"
        p={0} // Remove padding to make full use of space
        mb={4}
      >
        <Flex direction="column" height="100%">
          {/* Image Section */}
          <Box width="100%" height="50%">
            <Image
              src={EwfnI} // Replace with the actual image link
              alt="Academics"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          {/* Text Section */}
          <Flex
            direction="column"
            align="center"
            justify="center"
            p={4}
            height="50%"
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Academics
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="center">
              - Minimum of two academic subjects with passing grades
              <br />
              - Dedication to lifelong learning and personal growth
            </Text>
          </Flex>
        </Flex>
      </Box>

      {/* Card 3: Human */}
      <Box
        bg="white"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden"
        boxShadow="md"
        maxW="sm"
        width="100%"
        p={0} // Remove padding to make full use of space
        mb={4}
      >
        <Flex direction="column" height="100%">
          {/* Image Section */}
          <Box width="100%" height="50%">
            <Image
              src={jesus} // Replace with the actual image link
              alt="Human"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          {/* Text Section */}
          <Flex
            direction="column"
            align="center"
            justify="center"
            p={4}
            height="50%"
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Human
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="center">
              - Mental, emotional, and physical stability
              <br />
              - Sympathy and community spirit
              <br />
              - Desire to serve others with joy
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
    </Box>
  );
};

export default EntranceCards;
