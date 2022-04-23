import Head from 'next/head';
import coffees from '../data/coffee-data.json';
import { useState } from 'react';
import { Container, Grid, Heading } from '@chakra-ui/react';
import Card from '../components/featured/card';

const Shop = () => {
	const [coffeeList, setCoffeeList] = useState(coffees);
	const [index, setIndex] = useState(0);
	return (
		<>
			<Head>
				<title>Beans Coffee Shopee - Experience the best the world has to offer</title>
				<meta
					name="description"
					content="Beans Coffee Shopee offers you the best taste of variety of coffee available throughout the world from the confort of your home. Supports the Solana Pay"
				/>
			</Head>
			<Container as="section" maxW={['320px', '720px', '920px', '1140px']} py={[10, 2]} px={[0, 6]} my={0} minH="100vh" p={0}>
				<Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(auto, 1fr)', 'repeat(3, auto)']} width="100%" gap={4}>
					{coffeeList.map((coffee) => {
						return <Card key={coffee.id} coffee={coffee} currentSlide={index} buttonText="Add to Cart" />;
					})}
				</Grid>
			</Container>
		</>
	);
};

export default Shop;
