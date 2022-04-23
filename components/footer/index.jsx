import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import Logo from '../logo';

const Footer = () => {
	return (
		<Box as="section" bg="default" color="secondary" position="relative" pt={2}>
			<Container as="section" maxW={['320px', '720px', '920px', '1140px']} py={2} px={[0, 6]} my={0}>
				<Flex as="section" justifyContent={['center', 'center', 'space-between']} alignItems="center" width="100%">
					<Logo hide={true} />
					<Text color="primary" fontSize={['xs', 'md', 'lg', 'xl']} textAlign={'center'}>
						Copyright © Saurabh Srivastava, IBCoder. All Rights Reserved
					</Text>
					<Button
						variant="primaryOutline"
						as="button"
						fontWeight={['400']}
						rounded={4}
						letterSpacing={2}
						display={['none', 'none', 'inherit']}
						fontSize={['xs', 'xs', 'sm']}
						py={['inherit', 'inherit', '1rem', '1rem']}
						onClick={() =>
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: 'smooth',
							})
						}
					>
						Back to Top
					</Button>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
