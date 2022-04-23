import { Box, Container, Flex } from '@chakra-ui/react';
import BurgerBar from '../burgerbar';
import Logo from '../logo';
import Navigation from '../navigation';

const Header = () => {
	return (
		<Box as="section" bg="default" color="secondary" position="relative" pt={2}>
			<Container as="section" maxW={['320px', '720px', '920px', '1140px']} py={2} px={[0, 6]} my={0}>
				<Flex as="section" justifyContent="space-between" alignItems="center" width="100%">
					<Logo />
					<Navigation />
					<BurgerBar />
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
