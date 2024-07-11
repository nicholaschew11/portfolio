import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  Flex,
  Center,
  ListItem,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import ThemeToggleButton from '../components/theme-toggle-button'
import Layout from '../components/layouts/main'
import { FaGithub , FaEnvelope, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Center h="70vh">
      <Container>
      <Section delay={0.1}>
        <Flex justify="space-between" alignItems="center">
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="ghost"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            mb={10}
          >
          <ProfileImage
            src="/pic.jpg"
            alt="Profile image"
            borderRadius="full"
            width="100"
            height="100"
          />
          </Box>
          <ThemeToggleButton />
        </Flex>
        <Box flexGrow={1}>
          <Heading as="h4" variant="page-title" display="flex">
            Hi, I&apos;m Nicholas
          </Heading>
        </Box>
      </Section>


        <Section delay={0.1}>
          <Paragraph>
            I&apos;m a software engineering student at the {' '}
              <Link 
                as={NextLink} 
                href="https://uwaterloo.ca" 
                _hover={{ cursor: 'pointer', backgroundColor: 'rgba(128, 128, 128, 0.2)' }}
                target="_blank">
                University of Waterloo
              </Link>
              {' '} and an incoming ML Researcher at {' '}
              
              <Link 
                as={NextLink} 
                href="https://www.kaist.ac.kr/en/" 
                _hover={{ cursor: 'pointer', backgroundColor: 'rgba(128, 128, 128, 0.2)' }}
                target="_blank">
                KAIST
              </Link>
              {' '} working on LLM agents. Previously I've worked at {''}
              <Link 
                as={NextLink} 
                href="https://coalitioninc.com" 
                _hover={{ cursor: 'pointer', backgroundColor: 'rgba(128, 128, 128, 0.2)' }}
                target="_blank">
                Coalition
              </Link>
              , {' '}
              <Link
                as={NextLink}
                href="https://cisco.com"
                _hover={{ cursor: 'pointer', backgroundColor: 'rgba(66, 212, 245, 0.2)' }}
                target="_blank"
              >
              Cisco
              </Link>
              , and {' '} 
              <Link
                as={NextLink}
                href="https://cgi.com"
                _hover={{ cursor: 'pointer', backgroundColor: 'rgba(225, 0, 0, 0.2)' }}
                target="_blank"
              >
                CGI 
              </Link>
            .
            </Paragraph>
        </Section>

        <Section delay={0.1}>
        <List >
          <Flex direction="row" style={{ marginLeft: '-16px' }}>
            <ListItem>
              <Link href="mailto:nicholaschew10@gmail.com" style={{ background: 'none', boxShadow: 'none' }} target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<FaEnvelope />}
                  mr={2} 
                >
                  Email
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/nicholaschew11" style={{ background: 'none', boxShadow: 'none' }} target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<FaLinkedin />}
                  mr={2} 
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/nicholaschew11" style={{ background: 'none', boxShadow: 'none' }} target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<FaGithub />}
                >
                  Github
                </Button>
              </Link>
            </ListItem>
          </Flex>
        </List>
        </Section>
      </Container>
    </Center>
  </Layout>
)

export default Home;
