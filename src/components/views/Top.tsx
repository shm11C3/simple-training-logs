import Welcome from '../templates/Welcome'

export default function Top() {
  // ユーザー認証の状態によって表示するテンプレートを切り替える
  return <Welcome />
}
