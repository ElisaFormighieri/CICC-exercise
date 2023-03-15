import { ChakraProvider, Box } from '@chakra-ui/react';
import { AppRoutes } from './routes';

import { theme } from './styles/theme';


export const App = () => (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
);