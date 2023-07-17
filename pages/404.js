import NextLink from 'next/link'
import {
  Heading,
  Container,
  Button,
  Center
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Center>
      <Container textAlign="center">
        <Heading as="h1" marginBottom="4">
          Not found
        </Heading>

        <Button as={NextLink} href="/" colorScheme="blue">
          Return to home
        </Button>
      </Container>
    </Center>
  );
};

export default NotFound;