import { Box, Flex, Container, Heading } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FC } from 'react'
import LoginButton from '../parts/buttons/LoginButton'

export const Header: FC = () => {
  return (
    <Box px={4} bgColor="gray.200">
      <Container maxW="100%">
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          as="header"
          py="4"
          justifyContent="space-between"
        >
          <NextLink href="/" passHref>
            <Heading as="h1" fontSize="2xl" cursor="pointer">
              SimpleTrainingLogs
            </Heading>
          </NextLink>
          <LoginButton />
        </Flex>
      </Container>
    </Box>
  )
}
