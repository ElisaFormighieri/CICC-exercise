import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getLoggedUser, signOut } from '../utils/storage';
import { GoBackButton } from './GoBackButton';

type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  const toast = useToast();
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut();
    navigate('/');
    toast({
      title: 'Log Out',
      position: 'top-right',
      status: 'success',
      isClosable: true,
    });
  };

  return (
    <Flex w="100%" justifyContent={'space-between'} px={12} py={8}>
      <GoBackButton />
      <Flex gap={4} alignItems="center">
        <Text color="white">
          Hi <strong>{getLoggedUser()?.username}</strong>!
        </Text>
        <Button onClick={handleLogOut}>Log out</Button>
      </Flex>
    </Flex>
  );
};
