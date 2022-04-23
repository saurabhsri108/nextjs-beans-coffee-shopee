import { Button, Flex, HStack, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Navigation = () => {
	const [currentRoute, setCurrentRoute] = useState('/');
	const { route, push } = useRouter();

	useEffect(() => {
		setCurrentRoute(route);
	}, [route]);

	const to = (route) => {
		push(route);
	};

	return (
		<Flex justifyContent="space-between" alignItems="flex-end" fontSize={'lg'} display={['none', 'none', 'inherit']} flex={2} zIndex={1}>
			<HStack gap={2}>
				<Link href="/" passHref>
					<ChakraLink textDecoration="none" color={currentRoute === '/' ? 'primary' : ''}>
						Home
					</ChakraLink>
				</Link>
				<Link href="/about" passHref>
					<ChakraLink textDecoration="none" color={currentRoute === '/about' ? 'primary' : ''}>
						About Us
					</ChakraLink>
				</Link>
				<Link href="/shop" passHref>
					<ChakraLink textDecoration="none" color={currentRoute === '/shop' ? 'primary' : ''}>
						Purchase
					</ChakraLink>
				</Link>
				<Link href="/contact" passHref>
					<ChakraLink textDecoration="none" color={currentRoute === '/contact' ? 'primary' : ''}>
						Contact Us
					</ChakraLink>
				</Link>
			</HStack>
			<HStack gap={2}>
				<Link href="/login" passHref>
					<Button
						as="button"
						variant="primaryOutline"
						fontWeight={['400']}
						rounded={4}
						letterSpacing={2}
						fontSize={['xs', 'xs', 'sm']}
						py={['inherit', 'inherit', '1rem', '1rem']}
						onClick={() => to('login')}
					>
						Login
					</Button>
				</Link>
				<Link href="/signup" passHref>
					<Button
						as="button"
						variant="primary"
						fontWeight={['400']}
						rounded={4}
						letterSpacing={2}
						fontSize={['xs', 'xs', 'sm']}
						py={['inherit', 'inherit', '1rem', '1rem']}
						onClick={() => to('signup')}
					>
						Sign up
					</Button>
				</Link>
			</HStack>
		</Flex>
	);
};

export default Navigation;
