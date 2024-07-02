import React from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

export function StripeTitle(props: HeadingProps) {
  return (
    <Heading
      as='h2'
      fontSize={['lg', 'xl', '2xl', '3xl']}
      lineHeight='calc(0.5rem + 1em)'
      textAlign='center'
      textTransform='uppercase'
      position='relative'
      pt='1%'
      mb='1.5rem'
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, 0)',
        width: '8%',
        height: '8%',
        maxW: '5rem',
        background: '#fff'
      }}
      {...props}
    />
  );
}
