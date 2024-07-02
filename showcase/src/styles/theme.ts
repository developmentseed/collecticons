import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: `"Pier Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`,
    body: `"Pier Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`,
  },
  colors: {
    base: '#201D1D',
    primary: '#F1584A',
    secondary: '#F1826A'
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'primary'
      }
    }
  }
});
