import { ChakraProvider } from '@chakra-ui/react';
import { MatTable } from './index';
import theme from './theme';
import { MyProvider } from './context/data';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MyProvider>
        <MatTable />
      </MyProvider>
    </ChakraProvider>
  );
}

export default App;
