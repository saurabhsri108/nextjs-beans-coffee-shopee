import { Box, Button, chakra, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Rating from './rating';

const Card = ({ coffee: { name, description, rating, price, image }, currentSlide, buttonText }) => {
	const handlePayment = () => {
		alert('Solana Payment');
	};

	return (
		<Flex
			alignItems="flex-end"
			flex={1}
			minWidth={['16rem']}
			minHeight={['24rem']}
			color="default"
			rounded={4}
			position="relative"
			zIndex="3"
			width={100}
			height={100}
		>
			<Image src={image} alt={name} layout="fill" objectFit="cover" objectPosition="center" className="card-image" />
			<VStack
				shadow="lg"
				p={4}
				zIndex={3}
				bg={`linear-gradient(180deg, hsl(2deg 51% 11% / 0%) 0%, hsl(2deg 51% 11% / 40%) 10.08%, hsl(2deg 51% 11%) 100%)`}
				bgRepeat="no-repeat"
				bgPosition="center"
				bgSize="cover"
				opacity="1"
			>
				<Heading as="h3" size="md" fontFamily="body" fontWeight="400" textAlign="center">
					{name}
				</Heading>
				<Rating rating={rating} text={`${rating} stars`} />
				<Text as="p" textAlign="center" lineHeight="1.3">
					{description}
				</Text>
				<Heading as="h4" size="md" fontFamily="body" fontWeight="400" textAlign="center">
					${price}
				</Heading>
				<Button variant="default" onClick={handlePayment} fontWeight="400">
					{buttonText}
				</Button>
			</VStack>
		</Flex>
	);
};

export default Card;
