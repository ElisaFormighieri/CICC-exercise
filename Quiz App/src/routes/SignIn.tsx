import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Link,
  Image,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { signIn } from '../utils/storage';

export const SignIn = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');

  const handleSignIn = () => {
    try {
      signIn(usernameInputValue, passwordInputValue);
      navigate('/play');
      toast({
        title: 'Authenticated',
        position: 'top-right',
        status: 'success',
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: (err as Error).message,
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Box w="450px" h="575px">
        <Flex
          flexDirection="column"
          background="gray.800"
          p={12}
          borderRadius={5}
          boxShadow="dark-lg">
          <Heading textAlign="center" color="whiteAlpha.900" mt={5} mb={10}>
            Log In
          </Heading>
          <FormControl
            mb="5px"
            fontFamily="heading"
            fontWeight="semibold"
            fontSize={18}
            color="whiteAlpha.900">
            <FormLabel>Username</FormLabel>
            <Input
              background="whiteAlpha.800"
              variant="outline"
              bg="none"
              mb={3}
              value={usernameInputValue}
              onChange={(event) => setUsernameInputValue(event.target.value)}
            />
          </FormControl>

          <FormControl
            mb="5px"
            fontFamily="heading"
            fontWeight="semibold"
            fontSize={18}
            color="whiteAlpha.900">
            <FormLabel>Password</FormLabel>
            <Input
              background="whiteAlpha.800"
              placeholder="**********"
              type="password"
              variant="outline"
              bg="none"
              mb={20}
              value={passwordInputValue}
              onChange={(event) => setPasswordInputValue(event.target.value)}
            />
          </FormControl>

          <Box mb="18px" color="whiteAlpha.900">
            Don't have an account yet?{' '}
            <Link color="red.400" as={ReactRouterLink} to="/signup">
              Sign up
            </Link>
          </Box>
          <Button
            onClick={handleSignIn}
            color="whiteAlpha.800"
            bg="blue.800"
            mb={14}>
            Log In
          </Button>
        </Flex>
      </Box>
      <Box>
        <Image
          boxShadow="dark-lg"
          borderRadius={5}
          w="500px"
          h="575px"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/185/674/small_2x/quiz-time-neon-signs-style-text-free-vector.jpg"
          alt="quiz image"
        />
      </Box>
    </Flex>
  );
};
