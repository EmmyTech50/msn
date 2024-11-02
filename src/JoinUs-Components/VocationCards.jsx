import { Box, Flex, Text, Image } from "@chakra-ui/react";
import cross from '../assets/cross.png'
import Bible from '../assets/Bible.png'
import jesus from '../assets/jesus.png'

const Vocation = () => {
  return (
    <Box p={8} bg="white" color="black">
      {/* Header */}
      <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={4}>
        Vocation
      </Text>

      {/* Cards Container */}
    <Flex justify="space-around" wrap="wrap">
      {/* Card 1: A Holy Calling */}
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
              src={Bible} // Replace with the actual image link
              alt="A Holy Calling"
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
            <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>
              A Holy Calling
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="center">
              This is the vocation to act upon God’s call, allowing God’s Spirit to work through us. Our holy calling encourages us to respond in joy as God's instrument of peace and love.
            </Text>
          </Flex>
        </Flex>
      </Box>

      {/* Card 2: Devoted to God's Glory */}
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
              src={cross} // Replace with the actual image link
              alt="Devoted to God's Glory"
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
            <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>
              Devoted to God's Glory
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="center">
              We seek those who dedicate their lives entirely to glorify God, aligning their actions to divine purposes and priorities.
            </Text>
          </Flex>
        </Flex>
      </Box>

      {/* Card 3: Serving in Christ’s Example */}
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
              alt="Serving in Christ’s Example"
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
            <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>
              Serving in Christ’s Example
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="center">
              We seek those who feel called to serve humbly, following Christ's example by placing others first and leading with compassion and love.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
    </Box>
  );
};

export default Vocation;
