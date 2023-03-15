import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box,
  Image,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  Link
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Tabs mt={8} variant="enclosed">
      <TabList>
        <Tab>Sign In</Tab>
        <Tab>Sign Up</Tab>
        <Tab>Quiz</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Flex h="100vh" alignItems="center" justifyContent="center">
          <Box w="450px" h="100vh" >
          <Flex
        flexDirection="column"
        background="gray.800"
        p={12}
        borderRadius={5}
        boxShadow="dark-lg"
      >
        <Heading textAlign='center' color="whiteAlpha.900"mt={5} mb={10}>Log In</Heading>
        <FormControl mb="5px" fontFamily='heading' fontWeight='semibold' fontSize={18} color="whiteAlpha.900">Email</FormControl>
        <Input
          background="whiteAlpha.800"
          placeholder="@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <FormControl mb="5px"fontFamily='heading' fontWeight='semibold' fontSize={18} color="whiteAlpha.900">Password</FormControl>
        <Input
          background="whiteAlpha.800"
          placeholder="**********"
          type="password"
          variant="filled"
          mb={20}
        />
        <FormControl mb="18px"color="whiteAlpha.900">Don't have an account yet? <Link color="red.400" as={ReactRouterLink} to="/signup" >Sign up</Link></FormControl>
        <Button color="whiteAlpha.800" bg="blue.800" mb={14}>
          Log In
        </Button>
        </Flex>
          </Box>
          <Box>
            <Image boxShadow="dark-lg" borderRadius={5} mt="-35px" w="500px" h="575px"src='https://static.vecteezy.com/system/resources/thumbnails/002/185/674/small_2x/quiz-time-neon-signs-style-text-free-vector.jpg' alt='quiz image'/>
          </Box>
          </Flex>

        </TabPanel>
        <TabPanel>
          <Flex w="100%" h="100vh" alignItems="center" justifyContent="center" >
          <Flex
        flexDirection="column"
        background="gray.800"
        p={12}
        borderRadius={5}
        boxShadow="dark-lg"
      >
        <Heading textAlign='center' color="whiteAlpha.900" mb={10} px={12}>Create an account</Heading>
        <FormControl mb="5px" fontFamily='heading' fontWeight='semibold' fontSize={18} color="whiteAlpha.900">Name</FormControl>
        <Input
          background="whiteAlpha.800"
          placeholder="Username"
          type="email"
          variant="filled"
          mb={3}
        />
         <FormControl mb="5px" fontFamily='heading' fontWeight='semibold' fontSize={18} color="whiteAlpha.900">Email</FormControl>
        <Input
          background="whiteAlpha.800"
          placeholder="@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <FormControl mb="5px"fontFamily='heading' fontWeight='semibold' fontSize={18} color="whiteAlpha.900">Create a password</FormControl>
        <Input
          background="whiteAlpha.800"
          placeholder="**********"
          type="password"
          variant="filled"
          mb={3}
        />
        <FormControl mb="5px"fontFamily='heading' fontWeight='semibold' fontSize={18} color="whiteAlpha.900">Confirm your password</FormControl>
        <Input
          background="whiteAlpha.800"
          placeholder="**********"
          type="password"
          variant="filled"
          mb={16}
        />
        <Button color="whiteAlpha.800" bg="blue.800">
          Sign Up
        </Button>
        </Flex>
          </Flex>
        </TabPanel>

        <TabPanel p={0} m={0} background="gray.800" >
          <Box display="flex">
          <Box mt={8} ml={24} w="480px">
          <Flex 
          alignItems="flex-start" 
          justifyContent="flex-start"
          flexDirection="column"
          background="blackAlpha.50"
          p={12}
          borderRadius={5}
          boxShadow="dark-lg"
      >
        <FormControl mb={14} fontFamily='heading' fontWeight='semibold' fontSize={18} color="white">First Question </FormControl>
        <Button color="whiteAlpha.800" bg="gray.600" mb={7}>
          A
        </Button>
        <Button color="whiteAlpha.800" bg="gray.700" mb={7}>
          B
        </Button>
        <Button color="whiteAlpha.800" bg="gray.600" mb={7}>
          C
        </Button>
        <Button color="whiteAlpha.800" bg="gray.700" mb={7}>
          D
        </Button>
        <Button color="whiteAlpha.800" bg="gray.600" mb={7}>
          E
        </Button>
        <Button color="whiteAlpha.800" bg="gray.700" mb={3}>
          F
        </Button>
        </Flex>
        </Box>
          <Box>
            <Image ml={12} mt={10} display="flex" alignItems="center" justifyContent="center" w={200}src='/images/title.png' alt='quiz image'/>
            <Image mt={-48} ml={12} w={600} h="100vh" src='/images/quiz.png' alt='quiz image'/>
          </Box>
        </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
