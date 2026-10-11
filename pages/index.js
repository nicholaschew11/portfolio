import NextLink from "next/link";
import {
  Link,
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import ThemeToggleButton from "../components/theme-toggle-button";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => (
  <Flex minH="100vh" align="center" justify="center" px={{ base: 6, md: 0 }}>
    <Box maxW="460px" w="100%" py={16}>
      <Section delay={0.05}>
        <Flex justify="space-between" alignItems="center" mb={6}>
          <Heading
            as="h1"
            variant="page-title"
            fontSize={{ base: "2xl", md: "3xl" }}
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
          I&apos;m a software engineer with experience in AI infrastructure and
          distributed systems.
        </Paragraph>
        <UnorderedList spacing={2} pl={2} lineHeight={1.8}>
          <ListItem>
            <Link
              as={NextLink}
              href="https://www.openai.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAI
            </Link>
            , working on{" "}
            <Link
              as={NextLink}
              href="https://openai.com/codex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codex
            </Link>
          </ListItem>
          <ListItem>
            <Link
              as={NextLink}
              href="https://www.databricks.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Databricks
            </Link>
            , working on{" "}
            <Link
              as={NextLink}
              href="https://www.databricks.com/blog/introducing-real-time-mode-apache-sparktm-structured-streaming"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spark Structured Streaming
            </Link>
          </ListItem>
          <ListItem>
            <Link
              as={NextLink}
              href="https://engineering.fb.com/category/production-engineering/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meta
            </Link>
            , working on{" "}
            <Link
              as={NextLink}
              href="https://engineering.fb.com/2024/07/10/production-engineering/tail-utilization-ads-inference-meta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ML inference infrastructure
            </Link>
          </ListItem>
          <ListItem>
            <Link
              as={NextLink}
              href="https://www.nvidia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NVIDIA
            </Link>
            , working on{" "}
            <Link
              as={NextLink}
              href="https://www.nvidia.com/en-us/data-center/dgx-cloud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DGX Cloud
            </Link>
          </ListItem>
        </UnorderedList>
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
            _hover={{ opacity: 1, textDecoration: "none" }}
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
            _hover={{ opacity: 1, textDecoration: "none" }}
            transition="opacity 0.2s ease"
            textDecoration="none"
            fontSize="sm"
          >
            <FaLinkedin size={13} />
            <Text>LinkedIn</Text>
          </Link>
          <Link
            href="https://github.com/nicholaschew11"
            display="flex"
            alignItems="center"
            gap={2}
            opacity={0.55}
            _hover={{ opacity: 1, textDecoration: "none" }}
            transition="opacity 0.2s ease"
            textDecoration="none"
            fontSize="sm"
          >
            <FaGithub size={13} />
            <Text>GitHub</Text>
          </Link>
        </Flex>
      </Section>
    </Box>
  </Flex>
);

export default Home;
