import { Group, Loader, Text } from '@mantine/core'

export default function Loading() {
  return (
    <Group align="center">
      <Loader type="dots" color="grape" />
      <Text c="dimmed">loading ...</Text>
    </Group>
  )
}
