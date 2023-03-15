import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
  Text,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoBackButton } from '../components/GoBackButton';
import { signUp } from '../utils/storage';

export const SignUp = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [nameInputValue, setNameInputValue] = useState('');

  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [confirmPasswordInputValue, setConfirmPasswordInputValue] =
    useState('');

  const handleSignUp = () => {
    if (passwordInputValue !== confirmPasswordInputValue) {
      toast({
        title: 'Passwords must match.',
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    } else
      try {
        signUp(usernameInputValue, nameInputValue, passwordInputValue);
        navigate('/');
        toast({
          title: 'Account created',
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
    <Flex w="100%" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        pos="relative"
        flexDirection="column"
        background="gray.800"
        px={32}
        pb={12}
        borderRadius="8px"
        boxShadow="dark-lg">
        <Heading color="whiteAlpha.900" mb={6}>
          <Box pos="absolute" left={8} top={8} fontSize="md">
            <GoBackButton />
          </Box>{' '}
          <Text mt={20}> Create an account</Text>
        </Heading>
        <FormControl
          mb="5px"
          fontFamily="heading"
          fontWeight="semibold"
          fontSize={18}
          color="whiteAlpha.900">
          <FormLabel>Name</FormLabel>
          <Input
            background="whiteAlpha.800"
            placeholder="Name"
            variant="outline"
            bg="none"
            mb={3}
            value={nameInputValue}
            onChange={(event) => setNameInputValue(event.target.value)}
          />
        </FormControl>

        <FormControl
          mb="5px"
          fontFamily="heading"
          fontWeight="semibold"
          fontSize={18}
          color="whiteAlpha.900">
          <FormLabel>Username</FormLabel>
          <Input
            background="whiteAlpha.800"
            placeholder="Username"
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
          <FormLabel>Create a password</FormLabel>
          <Input
            background="whiteAlpha.800"
            placeholder="**********"
            type="password"
            variant="outline"
            bg="none"
            mb={3}
            value={passwordInputValue}
            onChange={(event) => setPasswordInputValue(event.target.value)}
          />
        </FormControl>

        <FormControl
          mb="5px"
          fontFamily="heading"
          fontWeight="semibold"
          fontSize={18}
          color="whiteAlpha.900">
          <FormLabel>Confirm your password</FormLabel>
          <Input
            background="whiteAlpha.800"
            placeholder="**********"
            type="password"
            variant="outline"
            bg="none"
            mb={16}
            value={confirmPasswordInputValue}
            onChange={(event) =>
              setConfirmPasswordInputValue(event.target.value)
            }
          />
        </FormControl>

        <Button onClick={handleSignUp} color="whiteAlpha.800" bg="blue.800">
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
};
