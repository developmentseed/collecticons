import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import { App } from './components/app';
import { theme } from './styles/theme';
import { Fonts } from './styles/fonts';

const container = document.getElementById('app')!;
const root = createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <Fonts />
    <App />
  </ChakraProvider>
);
