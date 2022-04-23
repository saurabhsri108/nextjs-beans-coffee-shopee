import { Box, Button, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
	return (
		<Container as="section" maxW={['320px', '720px', '920px', '1140px']} py={2} px={[0, 6]} my={0} minH="100vh">
			<Box
				position="absolute"
				top={0}
				left={0}
				as="section"
				pos="absolute"
				width="100vw"
				minH="100vh"
				_before={{
					content: '""',
					bgImage: 'url(/assets/images/bg-coffee.jpeg)',
					bgSize: 'cover',
					pos: 'absolute',
					top: '-20rem',
					right: 0,
					left: 0,
					bottom: 0,
					opacity: 0.1,
				}}
			></Box>
			<Flex
				as="section"
				justifyContent={['center', 'space-between']}
				alignItems={['flex-start', 'center']}
				direction={['column', 'row']}
				gap={['0', '2rem', '4rem']}
			>
				<VStack as="section" width={['320px']} gap={['inherit', '2rem 0']} mt={[2, 0]} flex={['none', 1]}>
					<Heading
						as="h1"
						textAlign={['center', 'left']}
						fontSize={['2xl', '5xl', '6xl', '7xl']}
						fontFamily="heading"
						fontWeight={['400']}
						letterSpacing={2}
						lineHeight={1}
						width="100%"
					>
						Beans Coffee Shopee
					</Heading>
					<Text
						textAlign={['center', 'left']}
						fontSize={['xs', 'xl', '3xl']}
						mt={['0.125rem !important', '-1.5rem !important']}
						lineHeight={['inherit', '1.25']}
						pt={0}
						width="100%"
					>
						Experience the genuine taste from the best of beans
					</Text>
					<HStack as="section" justifyContent={['space-between']} width="100%" mt={['0.825rem !important', '0 !important']}>
						<Link href="/shop" passHref>
							<Button
								as="button"
								variant="primary"
								fontWeight={['400']}
								rounded={4}
								flex={1}
								letterSpacing={2}
								fontSize={['xs', 'sm', 'lg']}
								py={['inherit', 'inherit', '1.5rem', '1.75rem']}
							>
								Purchase
							</Button>
						</Link>
						<Link href="/contact" passHref>
							<Button
								as="button"
								variant="primaryOutline"
								fontWeight={['400']}
								rounded={4}
								flex={1}
								letterSpacing={2}
								fontSize={['xs', 'sm', 'lg']}
								py={['inherit', 'inherit', '1.5rem', '1.75rem']}
							>
								Contact Us
							</Button>
						</Link>
					</HStack>
				</VStack>
				<HStack
					as="section"
					width={['320px', '320px', '480px']}
					height={['410px', '410px', '615px']}
					position="relative"
					rounded={4}
					overflow="hidden"
					order={['-1', 'inherit']}
					mt={[2, 4]}
					flex={['none', 1]}
				>
					<Image src="/assets/images/ante-samarzija-coffee.jpeg" layout="fill" objectFit="cover" alt="A Coffee Cup Banner Image" />
				</HStack>
			</Flex>
		</Container>
	);
};

export default Hero;
