import { Container, Flex } from '@chakra-ui/react'
import RegisterButton from '../parts/buttons/RegisterButton'
import WelcomeText from '../parts/texts/WelcomeText'

// ゲストユーザがトップページとプライベートなページにアクセスした場合この画面を表示
export default function Welcome() {
  return (
    <Container
      width={450}
      p={10}
      mt={2}
      boxShadow="lg"
      border="1px"
      borderColor="gray.100"
    >
      <WelcomeText />
      <Flex justifyContent="flex-end" mt={20}>
        <RegisterButton />
      </Flex>
    </Container>
  )
}
