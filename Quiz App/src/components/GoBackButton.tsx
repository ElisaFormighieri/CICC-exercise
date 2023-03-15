import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {ArrowBackIcon} from '@chakra-ui/icons';

export const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <Box as="button" onClick={() => navigate(-1)}>
      <ArrowBackIcon w={8} h={8} color="gray.300" />
    </Box>
  );
};
