import NextLink from 'next/link';
import {
  Link,
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import ThemeToggleButton from '../components/theme-toggle-button';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Home = () => (
  <Flex minH="100vh" align="center" justify="center" px={{ base: 6, md: 0 }}>
    <Box maxW="460px" w="100%" py={16}>
      <Section delay={0.05}>
        <Flex justify="space-between" alignItems="center" mb={6}>
          <Heading
            as="h1"
            variant="page-title"
            fontSize={{ base: '2xl', md: '3xl' }}
            mb={0}
          >
            Hi, I&apos;m Nicholas
          </Heading>
          <Box>
            <ThemeToggleButton />
          </Box>
        </Flex>
      </Section>

      <Section delay={0.15}>
        <Paragraph>
          I&apos;m a Member of Technical Staff Intern at{' '}
          <Link
            as={NextLink}
            href="https://www.openai.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenAI
          </Link>
          {' '}working on {' '}
          <Link
            as={NextLink}
            href="https://openai.com/codex"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codex
          </Link>
          . I was at{' '}
          <Link
            as={NextLink}
            href="https://www.databricks.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Databricks
          </Link>{' '}
          working on{' '}
          <Link
            as={NextLink}
            href="https://www.databricks.com/blog/introducing-real-time-mode-apache-sparktm-structured-streaming"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spark Structured Streaming
          </Link>
          {' '} and at {' '}
          <Link
            as={NextLink}
            href="https://www.meta.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meta
          </Link>{' '}
          working on ML inference infrastructure.
        </Paragraph>
        <Paragraph>
          Software engineering student at the{' '}
          <Link
            as={NextLink}
            href="https://uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Waterloo
          </Link>{' '}
          pursuing specializations in Human-Computer Interaction and Artificial
          Intelligence.
        </Paragraph>
        <Paragraph>
          I&apos;ve also worked at{' '}
          <Link
            as={NextLink}
            href="https://coalitioninc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coalition
          </Link>
          ,{' '}
          <Link
            as={NextLink}
            href="https://cisco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cisco
          </Link>
          , and{' '}
          <Link
            as={NextLink}
            href="https://cgi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            CGI
          </Link>
          . I was a visiting researcher at{' '}
          <Link
            as={NextLink}
            href="https://www.kaist.ac.kr/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            KAIST
          </Link>{' '}
          in South Korea working on LLM agent simulation architectures.
        </Paragraph>
      </Section>

      <Section delay={0.25}>
        <Flex gap={5} alignItems="center">
          <Link
            href="mailto:nicholaschew10@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
            gap={2}
            opacity={0.55}
            _hover={{ opacity: 1, textDecoration: 'none' }}
            transition="opacity 0.2s ease"
            textDecoration="none"
            fontSize="sm"
          >
            <FaEnvelope size={13} />
            <Text>Email</Text>
          </Link>
          <Link
            href="https://linkedin.com/in/nicholaschew11"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            alignItems="center"
            gap={2}
            opacity={0.55}
            _hover={{ opacity: 1, textDecoration: 'none' }}
            transition="opacity 0.2s ease"
            textDecoration="none"
            fontSize="sm"
          >
            <FaLinkedin size={13} />
            <Text>LinkedIn</Text>
          </Link>
        </Flex>
      </Section>
    </Box>
  </Flex>
);

export default Home;
