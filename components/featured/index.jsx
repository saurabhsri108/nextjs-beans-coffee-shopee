import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import coffees from '../../data/coffee-data.json';
import { useState, useRef, useEffect } from 'react';
import Card from './card';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Featured = () => {
	const [coffeeList, setCoffeeList] = useState(coffees);
	const carousel = useRef();
	const [width, setWidth] = useState(0);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		// console.log(carousel.current.scrollWidth - carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	const leftSlide = () => {};

	const rightSlide = () => {};

	return (
		<Box bg="#E5E5E5">
			<Container as="section" maxW={['320px', '720px', '920px', '1140px']} py={[10, 2]} px={[0, 6]} my={0} minH="100vh">
				<Heading
					as="h2"
					textAlign={['center']}
					fontSize={['2xl', '5xl', '6xl', '7xl']}
					fontFamily="heading"
					fontWeight={['400']}
					letterSpacing={2}
					lineHeight={1}
					width="100%"
					mb={4}
				>
					Our Personal Picks
				</Heading>
				<motion.div
					className="carousel"
					ref={carousel}
					whileTap={{
						cursor: 'grabbing',
					}}
				>
					<motion.div
						className="inner-carousel"
						drag="x"
						dragConstraints={{
							right: 0,
							left: -width,
						}}
					>
						{coffeeList.map((coffee) => {
							return (
								<motion.div key={coffee.id}>
									<Card coffee={coffee} currentSlide={index} buttonText="Buy Now" />
								</motion.div>
							);
						})}
					</motion.div>
					<div className="left-arrow" onClick={leftSlide}>
						<FontAwesomeIcon icon={faArrowCircleLeft} fontSize={36} />
					</div>
					<div className="right-arrow" onClick={rightSlide}>
						<FontAwesomeIcon icon={faArrowCircleRight} fontSize={36} />
					</div>
				</motion.div>
			</Container>
		</Box>
	);
};

export default Featured;
