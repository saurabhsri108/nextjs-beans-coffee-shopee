import Head from 'next/head';
import Featured from '../components/featured';
import Hero from '../components/hero';

export default function Home() {
	return (
		<>
			<Head>
				<title>Beans Coffee Shopee - Experience the best the world has to offer</title>
				<meta
					name="description"
					content="Beans Coffee Shopee offers you the best taste of variety of coffee available throughout the world from the confort of your home. Supports the Solana Pay"
				/>
			</Head>
			<Hero />
			<Featured />
		</>
	);
}
