import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import { App } from './components/app';
import system from './styles/theme';
import { Fonts } from './styles/fonts';

const container = document.getElementById('app')!;
const root = createRoot(container);

function Root() {
  return (
    <ChakraProvider value={system}>
      <Fonts />
      <App />
    </ChakraProvider>
  );
}

root.render(<Root />);
