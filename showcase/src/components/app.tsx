import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  HeadingProps,
  Link,
  ListItem,
  OrderedList,
  Text,
  Tooltip,
  UnorderedList,
  VisuallyHidden,
  keyframes,
  useBreakpointValue
} from '@chakra-ui/react';
import Clipboard from 'clipboard';

import * as collecticons from '@devseed-ui/collecticons-chakra';

const mainBg = keyframes`  
  from {
    background-position: -44vw top;
  }
  to {
    background-position: -48vw top;
  }
`;

const fadeIn = keyframes`  
  from {
    opacity: 0;
  }
  to {
    background-size: 1;
  }
`;

const iconNames = Object.keys(collecticons).filter((k) =>
  k.startsWith('Collecticon')
);

// @ts-expect-error import image as url
import bgImg from 'url:../media/main-bg.svg';

function StripeTitle(props: HeadingProps) {
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

export function App() {
  return (
    <Box
      minH='100vh'
      bgColor='primary'
      bgImage={`url(${bgImg})`}
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPos={['-48vw center', '-48vw top', '-80vw center']}
      color='base'
      animation={{
        md: `${mainBg} 4s ease 0s 1 normal forwards`
      }}
    >
      <Container
        maxW='container.xl'
        color='white'
        display='flex'
        flexFlow='column'
      >
        <Box
          as='header'
          role='banner'
          animation={`${fadeIn} 1s ease 0s 1`}
          textAlign='center'
          padding={{
            base: '2rem',
            sm: '3rem',
            md: '4rem'
          }}
          textTransform='uppercase'
          fontWeight='700'
        >
          <Heading
            fontSize={{
              base: '2rem',
              sm: '3rem',
              md: '4rem',
              lg: '5rem',
              xl: '6rem'
            }}
            position='relative'
            lineHeight='1'
            pt='3.2%'
            margin='0'
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translate(-50%, 0)',
              width: '12%',
              height: '10%',
              maxW: '10rem',
              background: '#fff'
            }}
          >
            Collecticons
          </Heading>
          <Text
            fontSize={{
              base: '1rem',
              sm: '1.25rem',
              md: '1.5rem'
            }}
            mt='4'
          >
            An evergrowing collection of crisp icons.
          </Text>
          <Text mt='8'>
            <Button
              as='a'
              href='collecticons.zip'
              title='Get the icons!'
              colorScheme='whiteAlpha'
              borderRadius='0'
            >
              <span>Download</span>
            </Button>
            <Text
              as='small'
              display='block'
              fontSize='1rem'
              lineHeight='1.5'
              mt='0.5rem'
              opacity='0.64'
            >
              V{collecticons.version} / {iconNames.length} icons
            </Text>
          </Text>
        </Box>
        <Box as='main' role='main'>
          <Box as='section' mb={{ base: '3rem', md: '4rem' }}>
            <VisuallyHidden>
              <StripeTitle>Showcase</StripeTitle>
            </VisuallyHidden>
            <UnorderedList
              display='flex'
              justifyContent='center'
              gap='4'
              styleType='none'
              flexWrap='wrap'
            >
              {iconNames.map((iconName) => {
                const Cmp = (
                  collecticons as unknown as Record<
                    string,
                    collecticons.CollecticonChakra
                  >
                )[iconName];

                return (
                  <ListItem
                    key={iconName}
                    display='flex'
                    background='rgba(255,255,255,0.16)'
                  >
                    <CollecticonItem Component={Cmp} name={iconName} />
                  </ListItem>
                );
              })}
            </UnorderedList>
          </Box>
        </Box>
        <Box as='section' mb={{ base: '3rem', md: '4rem' }}>
          <StripeTitle>Usage</StripeTitle>
          <Container maxW='container.md'>
            <Heading as='h3'>Downloading the SVG&apos;s</Heading>
            <OrderedList>
              <ListItem>
                <p>
                  <Link href='/collecticons.zip' title='Get the icons!'>
                    Download Collecticons
                  </Link>
                  .
                </p>
              </ListItem>
              <ListItem>
                <p>Done! ✨</p>
              </ListItem>
            </OrderedList>

            <Heading as='h3'>Collecticons for React</Heading>
            <p>
              You can also use collecticons with{' '}
              <Link href='https://www.npmjs.com/' title='View NPM website'>
                NPM
              </Link>
              .
            </p>
            <OrderedList>
              <ListItem>
                <p>Install collecticons.</p>
                <div>
                  <pre>
                    <code>npm install --save VAAAAA</code>
                  </pre>
                </div>
              </ListItem>
              <ListItem>
                <p>Simply use an icon in your app:</p>
                <div>
                  <pre>
                    <code>&lt;Area /&gt;</code>
                  </pre>
                </div>
              </ListItem>
            </OrderedList>
          </Container>
        </Box>

        <Box as='section' mb={{ base: '3rem', md: '4rem' }}>
          <StripeTitle>About</StripeTitle>
          <Container maxW='container.md'>
            <p>
              We at{' '}
              <Link
                href='https://developmentseed.org'
                title='Visit Development Seed website'
              >
                Development Seed
              </Link>{' '}
              use iconography in a lot of projects. Some of the icons were
              designed/built on top of libraries like{' '}
              <Link
                href='https://github.com/Keyamoon/IcoMoon-Free'
                title='View icoMoon webfont'
              >
                icoMoon by Keyamoon
              </Link>{' '}
              and others were made in house. This evergrowing collection is a
              set of the icons we&apos;ve been using so far and are now
              available for free under the{' '}
              <Link
                href='https://github.com/developmentseed/collecticons/blob/master/LICENSE'
                title='View license'
              >
                The MIT License
              </Link>{' '}
              and the{' '}
              <Link href='https://creativecommons.org/licenses/by/4.0/'>
                Creative Commons Attribution License 4.0
              </Link>
              .
            </p>
            <p>
              If you feel like contributing to this library checkout our{' '}
              <Link
                href='https://github.com/developmentseed/collecticons-lib'
                title='View collecticons icon library'
              >
                collecticons library
              </Link>{' '}
              repo and submit a pull request.
            </p>
          </Container>
        </Box>
        <Box
          as='footer'
          role='contentinfo'
          py='2rem'
          textTransform='uppercase'
          fontSize='0.875rem'
          lineHeight='1.25rem'
          opacity='0.64'
          animation={`${fadeIn} 1s ease 0s 1`}
        >
          <Text
            display='flex'
            alignItems='center'
            justifyContent='center'
            gap={1}
          >
            Made with <collecticons.CollecticonHeart /> by
            <Link
              href='https://developmentseed.org'
              title='Visit Development Seed website'
            >
              Development Seed
            </Link>.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

function CollecticonItem({
  Component,
  name
}: {
  Component: collecticons.CollecticonChakra;
  name: string;
}) {
  const [showCopiedMsg, setShowCopiedMsg] = useState(false);

  const triggerElement = useRef<HTMLAnchorElement>(null);
  const copyValue = useRef<string>(name);
  copyValue.current = name;

  useEffect(() => {
    if (!triggerElement.current)
      throw new Error('ref for trigger element is not set');

    let copiedMsgTimeout: number | undefined;
    const clipboard = new Clipboard(triggerElement.current, {
      text: () => copyValue.current
    });

    clipboard.on('success', () => {
      setShowCopiedMsg(true);
      copiedMsgTimeout = setTimeout(() => {
        setShowCopiedMsg(false);
      }, 2000);
    });

    return () => {
      clipboard.destroy();
      if (copiedMsgTimeout) {
        clearTimeout(copiedMsgTimeout);
      }
    };
  }, []);

  const size = useBreakpointValue({ base: '16px', md: '32px' });

  return (
    <Tooltip hasArrow placement='top' label={showCopiedMsg ? 'Copied!' : name}>
      <Link
        href='#'
        p='4'
        onClick={(e) => e.preventDefault()}
        ref={triggerElement}
        color='white'
      >
        <Component size={{ base: '4', lg: '8' }} />
      </Link>
    </Tooltip>
  );
}
