import { ChakraProvider, Container } from '@chakra-ui/react';
import theme from '../styles/theme';
import '@fontsource/rubik-moonrocks';
import '@fontsource/bellefair';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/globals.css';

// Solana Pay Integration
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

require('@solana/wallet-adapter-react-ui/styles.css');

function MyApp({ Component, pageProps }) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = clusterApiUrl(network);
  const wallets = [new PhantomWalletAdapter()];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <ChakraProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </ChakraProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
