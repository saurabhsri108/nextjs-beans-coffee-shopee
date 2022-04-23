import { HStack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faRegStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ rating, text }) => {
	return (
		<HStack>
			<Text as="span">
				{rating >= 1 ? (
					<FontAwesomeIcon icon={faStar} />
				) : rating >= 0.5 ? (
					<FontAwesomeIcon icon={faStarHalfAlt} />
				) : (
					<FontAwesomeIcon icon={faRegStar} />
				)}
			</Text>
			<Text as="span">
				{rating >= 2 ? (
					<FontAwesomeIcon icon={faStar} />
				) : rating >= 1.5 ? (
					<FontAwesomeIcon icon={faStarHalfAlt} />
				) : (
					<FontAwesomeIcon icon={faRegStar} />
				)}
			</Text>
			<Text as="span">
				{rating >= 3 ? (
					<FontAwesomeIcon icon={faStar} />
				) : rating >= 2.5 ? (
					<FontAwesomeIcon icon={faStarHalfAlt} />
				) : (
					<FontAwesomeIcon icon={faRegStar} />
				)}
			</Text>
			<Text as="span">
				{rating >= 4 ? (
					<FontAwesomeIcon icon={faStar} />
				) : rating >= 3.5 ? (
					<FontAwesomeIcon icon={faStarHalfAlt} />
				) : (
					<FontAwesomeIcon icon={faRegStar} />
				)}
			</Text>
			<Text as="span">
				{rating >= 5 ? (
					<FontAwesomeIcon icon={faStar} />
				) : rating >= 4.5 ? (
					<FontAwesomeIcon icon={faStarHalfAlt} />
				) : (
					<FontAwesomeIcon icon={faRegStar} />
				)}
			</Text>
		</HStack>
	);
};

export default Rating;
