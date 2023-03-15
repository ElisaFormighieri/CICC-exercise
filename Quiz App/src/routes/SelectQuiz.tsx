import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

export const SelectQuiz = () => {
  return (
    <Flex w="100%" flexDir="column" alignItems="center">
      <Text color="white"fontSize="3xl">First, choose your Quiz category</Text>
      <Flex
        mt={20}
        bg="gray.700"
        py={20}
        borderRadius="16px"
        gap={10}
        w="100%"
        maxW="500px"
        justify="center">
        <Button colorScheme="teal" as={ReactRouterLink} to="brazil">
          Brazil
        </Button>
        <Button colorScheme="teal" as={ReactRouterLink} to="programming">
          Programming
        </Button>
        <Button colorScheme="teal" as={ReactRouterLink} to="math">
          Math
        </Button>
      </Flex>
    </Flex>
  );
};
