import Head from 'next/head';
import { Box } from '@chakra-ui/react';

const Main = ({ children }) => {
  return (
    <Box as="main" minH="100vh">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nicholas Chew" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Nicholas Chew</title>
      </Head>
      {children}
    </Box>
  );
};

export default Main;
