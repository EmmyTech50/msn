import { Box, Flex, Text, Button, Heading, Image, VStack, SimpleGrid } from "@chakra-ui/react";
import ChildrenImage from '../assets/roman-nguyen-1.png'
import joel from '../assets/joel-muniz2.png'

const AboutUs = () => {
  return (
    <Box bg="gray.100" p={6} textAlign={'center'} mx={{base:'5%', md:'10%'}}>
      {/* About Us Section */}
        <Heading size="lg" color="msn.400">About Us</Heading>
       <Flex spacing={4} mt={8} justifyContent='space-between' alignItems='center'>
        <Box textAlign={'justify'} w={{base:'100%',md:'70%'}}>
            <Text>
                The Missionary Servants of the Needy (MSN) is a Roman Catholic group
                dedicated to helping the poor. To join us, members must truly want to 
                serve those in need and view their role as a chance to help, rather than
                to gain honor or wealth. This means being ready to give up personal
                comforts for the sake of others. 
            </Text>
             <Text>&nbsp;</Text>
            <Text>
              In Scripture, Christ’s compassion for the poor is clear in 
              Matthew 14:13-21 and John 6:1-13. The Missionary Servants 
              of the Needy emulate this care by addressing suffering and serving 
              as “another Christ,” grounded in God’s Word and the Sacraments.
            </Text>
        </Box>
        <Image
          src={ChildrenImage} 
          alt="Helping the needy" 
          height={'100%'}
          w={{base:0,md:"25%"}}
        />
      </Flex>

      {/* Our Mission Section */}
      <Box bg="msn.400" p={6} mt={10} mx={0} w="100%">
        <Heading size="lg" mb={4} textAlign="center" color="white">Our Mission</Heading>

        {/* First Card */}
        <SimpleGrid columns={1} spacing={10} borderRadius="md" w="100%">
          <Box 
            bg="white" 
            borderRadius="20px" 
            boxShadow="md" 
            display="flex" 
            flexDirection={{ base: "column", md: "row" }} 
            h={{ base: "auto", md: "40vh" }}
            w="100%"
            overflow="hidden"
          >
            {/* Image Section */}
            <Box width={{ base: "100%", md: "50%" }} h={{ base: "200px", md: "100%" }} order={{ base: 1, md: 0 }}>
              <Image
                src={joel} // Replace with the actual image link
                alt="Charism image"
                borderRadius={{ base: "20px 20px 0 0", md: "20px 0 0 20px" }}
                h="100%"
                w="100%"
                objectFit="cover"
              />
            </Box>

            {/* Text Section */}
            <Flex 
              width={{ base: "100%", md: "50%" }} 
              flexDirection="column" 
              justifyContent="center" 
              p={6}
              order={{ base: 2, md: 1 }}
            >
              <Heading size="md" mb={2} textAlign={{ base: "center", md: "left" }}>
                Fundamental Charism
              </Heading>
              <Text textAlign={{ base: "center", md: "left" }}>
                Our mission is to embody the Holy Priesthood of Jesus Christ through sanctity and service to the
                poor, striving to save souls. Inspired by Matthew 28:16-20, we strive to make disciples and bring
                salvation through charity and service to the marginalized.
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>

        {/* Second Card */}
        <SimpleGrid columns={1} spacing={10} mt={10} w="100%">
          <Box 
            bg="white" 
            borderRadius="20px" 
            boxShadow="md" 
            display="flex" 
            flexDirection={{ base: "column", md: "row" }} 
            h={{ base: "auto", md: "40vh" }}
            w="100%"
            overflow="hidden"
          >
            {/* Image Section */}
            <Box width={{ base: "100%", md: "50%" }} h={{ base: "200px", md: "100%" }} order={{ base: 1, md: 1 }}>
              <Image
                src={joel} // Replace with the actual image link
                alt="Charism image"
                borderRadius={{ base: "20px 20px 0 0", md: "0 20px 20px 0" }}
                h="100%"
                w="100%"
                objectFit="cover"
              />
            </Box>

            {/* Text Section */}
            <Flex 
              width={{ base: "100%", md: "50%" }} 
              flexDirection="column" 
              justifyContent="center" 
              p={6}
              order={{ base: 2, md: 0 }}
            >
              <Heading size="md" mb={2} textAlign={{ base: "center", md: "left" }}>
                Our Mission
              </Heading>
              <Text textAlign={{ base: "center", md: "left" }}>
                Our mission is to embody the Holy Priesthood of Jesus Christ through sanctity and service to the
                poor, striving to save souls. Inspired by Matthew 28:16-20, we strive to make disciples and bring
                salvation through charity and service to the marginalized.
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>



      {/* Donate Button */}
      <Flex justify="center" mt={10}>
        <Button bgColor="blue" size="lg" color="#ffff">
          Donate
        </Button>
      </Flex>

      {/* Our Apostolate Section */}
      <Box mt={10}>
        <Heading size="lg" mb={4} color="msn.400">Our Apostolate</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {/* Card 1 */}
          <Box bg="white" p={4} shadow="md" borderRadius="md">
            <Heading size="md" color="msn.400">Education</Heading>
            <Text mt={2}>
              We provide access to education for children in underserved communities, helping to shape the future
              through learning and enlightenment.
            </Text>
          </Box>

          {/* Card 2 */}
          <Box bg="white" p={4} shadow="md" borderRadius="md">
            <Heading size="md" color="msn.400">Healthcare</Heading>
            <Text mt={2}>
              Healthcare services are provided to ensure the physical well-being of those in need, particularly
              the vulnerable and impoverished.
            </Text>
          </Box>

          {/* Card 3 */}
          <Box bg="white" p={4} shadow="md" borderRadius="md">
            <Heading size="md" color="msn.400">Youth Apostolate</Heading>
            <Text mt={2}>
              We engage the youth in spiritual and social activities that foster growth, responsibility, and a
              deeper connection to their faith.
            </Text>
          </Box>

          {/* Card 4 */}
          <Box bg="white" p={4} shadow="md" borderRadius="md">
            <Heading size="md" color="msn.400">Parish Work</Heading>
            <Text mt={2}>
              Our mission is supported through active involvement in parish work, promoting faith and service
              within local communities.
            </Text>
          </Box>

          {/* Card 5 */}
          <Box bg="white" p={4} shadow="md" borderRadius="md">
            <Heading size="md" color="msn.400">Orphanages</Heading>
            <Text mt={2}>
              Caring for orphaned children is a central mission, providing a safe, nurturing environment for
              growth and development.
            </Text>
          </Box>

          {/* Card 6 */}
          <Box bg="white" p={4} shadow="md" borderRadius="md">
            <Heading size="md" color="msn.400">Home Visitations</Heading>
            <Text mt={2}>
              We visit homes of the sick, elderly, and marginalized to offer companionship, support, and
              spiritual guidance.
            </Text>
          </Box>

          {/* Card 7 */}
          <Box bg="white" p={4} shadow="md" borderRadius="md">
            <Heading size="md" color="msn.400">Caring for Retired Priests and Elders</Heading>
            <Text mt={2}>
              Our mission extends to providing care and support for retired priests and the elderly, ensuring
              they are looked after in their twilight years.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AboutUs;
