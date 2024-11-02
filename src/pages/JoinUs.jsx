import React from 'react'
import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Vocation from "../JoinUs-Components/VocationCards";
import Entrance from "../JoinUs-Components/EntranceCards";
import Formation from "../JoinUs-Components/FormationStages";
import children2 from '../assets/children2.png'



// MotionBox allows Chakra components to have Framer Motion props
const MotionBox = motion.create(Box);



function JoinUs() {
  return (
    <Box as="main" color="gray.800" minH="100vh">
      {/* Hero Section */}
      <Flex 
        direction="column"
        align="center"
        justify="center"
        bg="blue.500" 
        h={{ base: "50vh", md: "70vh" }} 
        p={{ base: 4, md: 8 }}
        textAlign="center"
        backgroundImage={`url(${children2})`}
        backgroundSize="cover"
        backgroundPosition={{ base: "center", md: "right center" }}
        position="relative"
      >
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          maxW={{ base: "90%", md: "80%" }}
          px={{ base: 4, md: 0 }}
        >
          <Text 
            fontSize={{ base: "lg", md: "xl" }} 
            mb={4} 
            color={{ base: "msn.400", md: "#232425" }}
            fontFamily="fonts.heading" 
            fontWeight="bold"
          >
            Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} color="white">
            1 Peter 4:10
          </Text>
        </MotionBox>
      </Flex>



        {/* Vocation Section */}
        <Vocation />


        {/* Entrance Section*/}
        <Entrance />

        {/* Get Help Now Section */}
        <Formation />

      
    </Box>
  )
}

export default JoinUs