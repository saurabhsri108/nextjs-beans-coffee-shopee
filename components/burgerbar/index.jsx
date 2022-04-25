import { Box, VStack, Link as ChakraLink, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const FramerVStack = motion(VStack);

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' },
};

const BurgerBar = () => {
  const [open, setOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('/');
  const { route, push } = useRouter();

  useEffect(() => {
    setCurrentRoute(route);
  }, [route]);

  const openMenu = () => {
    setOpen(!open);
  };

  const to = (route) => {
    setOpen(!open);
    push(route);
  };

  return (
    <>
      <Box
        className="bars"
        onClick={openMenu}
        zIndex={3}
        display={['inherit', 'inherit', 'none']}
      >
        <span className={`bar bar-top ${open ? 'open' : ''}`}></span>
        <span className={`bar bar-upper-mid ${open ? 'open' : ''}`}></span>
        <span className={`bar bar-lower-mid ${open ? 'open' : ''}`}></span>
        <span className={`bar bar-base ${open ? 'open' : ''}`}></span>
      </Box>
      <FramerVStack
        position="absolute"
        top={0}
        left={0}
        w="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        gap={4}
        bgColor="default"
        zIndex={2}
        display={['inherit', 'inherit', 'none']}
        animate={open ? 'open' : 'closed'}
        variants={variants}
      >
        <Link href="/" passHref>
          <ChakraLink
            onClick={openMenu}
            textDecoration="none"
            color={currentRoute === '/' ? 'primary' : ''}
          >
            Home
          </ChakraLink>
        </Link>
        <Link href="/about" passHref>
          <ChakraLink
            onClick={openMenu}
            textDecoration="none"
            color={currentRoute === '/about' ? 'primary' : ''}
          >
            About Us
          </ChakraLink>
        </Link>
        <Link href="/shop" passHref>
          <ChakraLink
            onClick={openMenu}
            textDecoration="none"
            color={currentRoute === '/shop' ? 'primary' : ''}
          >
            Purchase
          </ChakraLink>
        </Link>
        <Link href="/contact" passHref>
          <ChakraLink
            onClick={openMenu}
            textDecoration="none"
            color={currentRoute === '/contact' ? 'primary' : ''}
          >
            Contact Us
          </ChakraLink>
        </Link>
        <WalletMultiButton className="btn-wallet" />
      </FramerVStack>
    </>
  );
};

export default BurgerBar;
