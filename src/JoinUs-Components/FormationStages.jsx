import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";

const FormationStages = () => {
  return (
    <Box p={8} bg="white" color="black">
      {/* Header */}
      <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb={4}>
        Formation Stages
      </Text>
      <Text textAlign="center" fontSize="lg" mb={8}>
        Your journey with us unfolds in several stages, each aimed at deepening your commitment and understanding.
      </Text>

      {/* Horizontal Scroll Wrapper for Mobile */}
      <Flex
        display={{ base: "flex", md: "none" }}
        overflowX="auto"
        gap={4}
        mt={4}
      >
        {/* Card 1 */}
        <Box
          minW="80%"
          bg="white"
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          p={4}
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>
            Postulancy (6 Months)
          </Text>
          <Text fontSize="sm" color="gray.600">
            - Introduction to community life, ministry, and work
            <br />
            - Education on spirituality, holiness, and sacraments
            <br />
            - Spiritual mentoring by an assigned mentor
          </Text>
        </Box>

        {/* Card 2 */}
        <Box
          minW="80%"
          bg="white"
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          p={4}
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>
            Novitiate (1 Year)
          </Text>
          <Text fontSize="sm" color="gray.600">
            - Intense prayer, reflection, and study of religious vows
            <br />
            - In-depth study of theology, Christology, and discipleship
          </Text>
        </Box>

        {/* Card 3 */}
        <Box
          minW="80%"
          bg="white"
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          p={4}
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>
            Temporary Profession
          </Text>
          <Text fontSize="sm" color="gray.600">
            - Initial vows renewed for 1-3 years
            <br />
            - Study of philosophy and theology
          </Text>
        </Box>

        {/* Card 4 */}
        <Box
          minW="80%"
          bg="white"
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          p={4}
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>
            Perpetual Profession
          </Text>
          <Text fontSize="sm" color="gray.600">
            - Lifelong commitment to the vows
            <br />
            - Dedicated to service and community
          </Text>
        </Box>

        {/* Card 5 */}
        <Box
          minW="80%"
          bg="white"
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          p={4}
          textAlign="center"
        >
          <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>
            Ongoing Formation
          </Text>
          <Text fontSize="sm" color="gray.600">
            - Continuous growth and spiritual renewal
            <br />
            - Support and guidance within the community
          </Text>
        </Box>
      </Flex>

      {/* Keep Grid Layout on Larger Screens */}
      <SimpleGrid columns={[1, null, 3]} spacing={4} mt={4} display={{ base: "none", md: "grid" }}>
        {/* Repeat the cards for desktop grid layout */}
        <Box bg="white" borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="md" p={4} textAlign="center">
          <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>Postulancy (6 Months)</Text>
          <Text fontSize="sm" color="gray.600">- Introduction to community life, ministry, and work<br />- Education on spirituality, holiness, and sacraments<br />- Spiritual mentoring by an assigned mentor</Text>
        </Box>
        <Box bg="white" borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="md" p={4} textAlign="center">
          <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>Novitiate (1 Year)</Text>
          <Text fontSize="sm" color="gray.600">- Intense prayer, reflection, and study of religious vows<br />- In-depth study of theology, Christology, and discipleship</Text>
        </Box>
        <Box bg="white" borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="md" p={4} textAlign="center">
          <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>Temporary Profession</Text>
          <Text fontSize="sm" color="gray.600">- Initial vows renewed for 1-3 years<br />- Study of philosophy and theology</Text>
        </Box>
        <Box bg="white" borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="md" p={4} textAlign="center">
          <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>Perpetual Profession</Text>
          <Text fontSize="sm" color="gray.600">- Lifelong commitment to the vows<br />- Dedicated to service and community</Text>
        </Box>
        <Box bg="white" borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="md" p={4} textAlign="center">
          <Text fontSize="xl" fontWeight="bold" color="purple.700" mb={2}>Ongoing Formation</Text>
          <Text fontSize="sm" color="gray.600">- Continuous growth and spiritual renewal<br />- Support and guidance within the community</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default FormationStages;
