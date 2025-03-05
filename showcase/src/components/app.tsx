import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  BoxProps,
  Button,
  Container,
  Heading,
  Link,
  LinkProps,
  List,
  Text,
  VisuallyHidden
} from '@chakra-ui/react';
import Clipboard from 'clipboard';
import * as collecticons from '@devseed-ui/collecticons-chakra';

// @ts-expect-error import image as url
import bgImg from 'url:../media/main-bg.svg';
import { StripeTitle } from './stripe-title';
import { Tooltip } from './ui/tooltip';

const iconNames = Object.keys(collecticons).filter((k) =>
  k.startsWith('Collecticon')
);

const HighlightBox = (props: BoxProps) => (
  <Box
    p={{ base: '1rem', md: '2rem' }}
    bg='rgba(255,255,255,0.16)'
    overflowX='auto'
    {...props}
  />
);

const TextLink = (props: LinkProps) => (
  <Link
    textDecoration='underline'
    _hover={{
      opacity: 0.64
    }}
    {...props}
  />
);

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
        md: 'mainBg'
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
          animation='fade-in'
          animationDuration='1s'
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
              asChild
              title='Get the icons!'
              borderRadius='0'
              bg='white/16'
            >
              <a href='collecticons.zip'>
                <span>Download</span>
              </a>
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
            <List.Root
              display='flex'
              flexDirection='row'
              justifyContent='center'
              gap='4'
              flexWrap='wrap'
              variant='plain'
            >
              {iconNames.map((iconName) => {
                const Cmp = (
                  collecticons as unknown as Record<
                    string,
                    collecticons.CollecticonChakra
                  >
                )[iconName];

                return (
                  <List.Item
                    key={iconName}
                    display='flex'
                    background='rgba(255,255,255,0.16)'
                  >
                    <CollecticonItem Component={Cmp} name={iconName} />
                  </List.Item>
                );
              })}
            </List.Root>
          </Box>
        </Box>
        <Box as='section' mb={{ base: '3rem', md: '4rem' }}>
          <StripeTitle>Usage</StripeTitle>
          <Container maxW='container.md' fontSize={{ md: '1.25rem' }}>
            <Heading as='h3' fontSize={['lg', 'xl', '2xl', '3xl']} mb={4}>
              Downloading the SVG&apos;s
            </Heading>
            <List.Root as='ol' pl={4} mb={8}>
              <List.Item mb={4}>
                <TextLink href='/collecticons.zip' title='Get the icons!'>
                  Download collecticons
                </TextLink>
                .
              </List.Item>
              <List.Item mb={4}>Done! ✨</List.Item>
            </List.Root>

            <Heading as='h3' fontSize={['lg', 'xl', '2xl', '3xl']} mb={4}>
              Collecticons for React
            </Heading>
            <Text mb={4}>
              You can also use collecticons with{' '}
              <TextLink href='https://www.npmjs.com/' title='View NPM website'>
                NPM
              </TextLink>
              .
            </Text>
            <List.Root as='ol' pl={4} mb={8}>
              <List.Item mb={4}>
                <p>Install collecticons.</p>
                <HighlightBox>
                  <pre>
                    <code>yarn add @devseed-ui/collecticons-react</code>
                  </pre>
                </HighlightBox>
              </List.Item>
              <List.Item mb={4}>
                <p>Simply use an icon in your app.</p>
                <HighlightBox>
                  <pre>
                    <code>&lt;CollecticonBrandDevelopmentSeed /&gt;</code>
                  </pre>
                </HighlightBox>
              </List.Item>
            </List.Root>

            <Heading as='h3' fontSize={['lg', 'xl', '2xl', '3xl']} mb={4}>
              Collecticons (Chakra UI specific)
            </Heading>
            <Text mb={4}>
              Collecticons is also available specifically for{' '}
              <TextLink href='https://chakra-ui.com/'>Chakra UI</TextLink>{' '}
              making it possible to use with the Chakra styled system.
            </Text>
            <List.Root as='ol' pl={4} mb={8}>
              <List.Item mb={4}>
                <p>Install collecticons.</p>
                <HighlightBox>
                  <pre>
                    <code>yarn add @devseed-ui/collecticons-chakra</code>
                  </pre>
                </HighlightBox>
              </List.Item>
              <List.Item mb={4}>
                <p>Simply use an icon in your app.</p>
                <HighlightBox>
                  <pre>
                    <code>
                      {`<CollecticonBrandDevelopmentSeed fontSize={{ base: '4', lg: '8' }} />`}
                    </code>
                  </pre>
                </HighlightBox>
              </List.Item>
            </List.Root>
          </Container>
        </Box>

        <Box as='section' mb={{ base: '3rem', md: '4rem' }}>
          <StripeTitle>About</StripeTitle>
          <Container maxW='container.md' fontSize={{ md: '1.25rem' }}>
            <Text mb={4}>
              We at{' '}
              <TextLink
                href='https://developmentseed.org'
                title='Visit Development Seed website'
              >
                Development Seed
              </TextLink>{' '}
              use iconography in a lot of projects. Some of the icons were
              designed/built on top of libraries like{' '}
              <TextLink
                href='https://github.com/Keyamoon/IcoMoon-Free'
                title='View icoMoon webfont'
              >
                icoMoon by Keyamoon
              </TextLink>{' '}
              and others were made in house. This evergrowing collection is a
              set of the icons we&apos;ve been using so far and are now
              available for free under the{' '}
              <TextLink
                href='https://github.com/developmentseed/collecticons/blob/master/LICENSE'
                title='View license'
              >
                The MIT License
              </TextLink>{' '}
              and the{' '}
              <TextLink href='https://creativecommons.org/licenses/by/4.0/'>
                Creative Commons Attribution License 4.0
              </TextLink>
              .
            </Text>
            <Text mb={4}>
              If you feel like contributing to this library checkout our{' '}
              <TextLink
                href='https://github.com/developmentseed/collecticons'
                title='View collecticons icon library'
              >
                collecticons library
              </TextLink>{' '}
              repo and submit a pull request.
            </Text>
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
          animation='fade-in'
          animationDuration='1s'
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
            </Link>
            .
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

const [isHover, setIsHover] = useState(false);

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

  return (
    <Tooltip
      showArrow
      positioning={{ placement: 'top' }}
      content={showCopiedMsg ? 'Copied!' : name}
      openDelay={0}
      open={isHover}
    >
      <Link
        href='#'
        p='4'
        onClick={(e) => e.preventDefault()}
        ref={triggerElement}
        color='white'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Component fontSize={{ base: '4', lg: '8' }} />
      </Link>
    </Tooltip>
  );
}
