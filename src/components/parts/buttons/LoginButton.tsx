import { Button, ButtonGroup } from '@chakra-ui/react'

interface ButtonProps {
  isLoading?: boolean
  isAuthenticated?: boolean
}

const LoginButton = (props: ButtonProps): JSX.Element => {
  const isLoading = props.isLoading || false
  const isAuthenticated = props.isAuthenticated || false

  return (
    // usernameは状態管理で取得する
    // ユーザーアイコン実装後はusernameをユーザーアイコンに変更する
    <Button colorScheme="teal" isLoading={isLoading}>
      {isAuthenticated ? 'username' : 'Login'}
    </Button>
  )
}

export default LoginButton
