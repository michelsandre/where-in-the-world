import { Center, Stack, Text } from '@mantine/core'
import { GhostIcon } from '@phosphor-icons/react'

export const EmptyState = () => {
  return (
    <Center>
      <Stack align="center" gap="xs">
        <GhostIcon size={48} color="gray" />
        <Text c="dimmed">No items found</Text>
      </Stack>
    </Center>
  )
}
