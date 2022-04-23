import { Flex, Icon, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Logo = ({ hide }) => {
	// console.log(hide);
	return (
		<Link href="/" passHref>
			<Flex as="a" color="primary" justifyContent="center" alignItems="center" direction="column" zIndex={3} mr={8}>
				<Icon fontSize={['sm', '1.5rem']} lineHeight={0} margin={0} padding={0} mb={['0.1rem', '-0.1rem', '-0.2rem', '-0.5rem']}>
					<FontAwesomeIcon icon={faMugSaucer} />
				</Icon>
				<Text fontFamily="heading" fontSize={[20, 25, 30, 35]} mt={-2}>
					Beans
				</Text>
			</Flex>
		</Link>
	);
};

export default Logo;
