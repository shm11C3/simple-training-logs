import { Center, Text, Highlight, Heading, VStack } from '@chakra-ui/react'

export default function WelcomeText(): JSX.Element {
  return (
    <div>
      <Center>
        <Heading as="h2" alignItems="center">
          Welcome!!
        </Heading>
      </Center>
      <VStack fontSize="xl" mt={5} justify="center" alignItems="center">
        <Text>
          <Highlight
            query="SimpleTrainingLogs"
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
          >
            SimpleTrainingLogsは
          </Highlight>
        </Text>
        <Text>無料で使える</Text>
        <Text>トレーニングログ管理サービスです!</Text>
        <Text></Text>
      </VStack>
    </div>
  )
}
