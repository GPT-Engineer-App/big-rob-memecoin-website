// Complete the Index page component for the Big Rob memecoin website
import { Box, Text, Image, Container, Heading, VStack } from "@chakra-ui/react";
import { FaBitcoin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4} bg="green.100">
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          Big Rob Memecoin <FaBitcoin />
        </Heading>
        <Image src="https://images.unsplash.com/photo-1515041219749-89347f83291a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2JiZXIlMjBjYXJ0b29ufGVufDB8fHx8MTcxMzQ4NzY2Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Cartoon Robber" boxSize="200px" objectFit="cover" />
        <Text fontSize="xl" textAlign="center">
          Welcome to the official site of Big Rob Memecoin!
        </Text>
        <Text fontSize="md" textAlign="center">
          This project is created by Rob and is intended for fun. Please enjoy responsibly!
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Text fontSize="lg">Disclaimer: This is not a real investment. It's a fun project made by Rob. Invest at your own risk!</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
