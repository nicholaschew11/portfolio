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
            src="/portrait.png"
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
            I&apos;m a Software Engineering student at the {' '}
            <Link 
              as={NextLink} 
              href="https://uwaterloo.ca" 
              _hover={{ cursor: 'pointer', backgroundColor: 'rgba(244, 196, 48, 0.2)' }}
              target="_blank">
              University of Waterloo
            </Link>
            . I have experience in full-stack development from various internships. Currently at {' '}
            <Link
              as={NextLink}
              href="https://cgi.com"
              _hover={{ cursor: 'pointer', backgroundColor: 'rgba(225, 0, 0, 0.2)' }}
              target="_blank"
            >
              CGI 
            </Link>
            {' '} devloping API microservices and an analytics dashboard. 
            
            </Paragraph>
            <br />
            <Paragraph>
              I&apos;ve also worked on projects such as a {' '}
            <Link
              as={NextLink}
              href="https://github.com/nicholaschew11/Radomir-Chess"
              _hover={{ cursor: 'pointer', backgroundColor: 'rgba(128, 200, 255, 0.2)' }}
              target="_blank"
            >
              multiplayer chess app
            </Link>
              , {' '}

            <Link
              as={NextLink}
              href="https://github.com/nicholaschew11/sharpchat"
              _hover={{ cursor: 'pointer', backgroundColor: 'rgba(128, 200, 255, 0.2)' }}
              target="_blank"
            >
              messaging web app
            </Link>
              , and {' '} 
              
            <Link
              as={NextLink}
              href="https://github.com/nicholaschew11/BlackjackVision"
              _hover={{ cursor: 'pointer', backgroundColor: 'rgba(128, 200, 255, 0.2)' }}
              target="_blank"
            >
              wearable glasses for blackjack
            </Link>
              . Aside from school, I spend my time making origami and playing piano which 
            have been long-standing passions of mine.
          </Paragraph>
          <br />
          <Paragraph>
            Feel free to chat through LinkedIn or at {' '}
            <Link
              as={NextLink}
              href="mailto:nicholas.chew@uwaterloo.ca"
              _hover={{ cursor: 'pointer', backgroundColor: 'rgba(128, 200, 255, 0.2)' }}
              target="_blank"
            >
              nicholas.chew@uwaterloo.ca
            </Link>
          </Paragraph>
        </Section>

        <Section delay={0.1}>
        <List >
          <Flex direction="row" style={{ marginLeft: '-16px' }}>
            <ListItem>
              <Link href="mailto:nicholas.chew@uwaterloo.ca" style={{ background: 'none', boxShadow: 'none' }} target="_blank">
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