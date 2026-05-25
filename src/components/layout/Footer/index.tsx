import { Anchor, Group, Text } from '@mantine/core'
import { GithubLogoIcon } from '@phosphor-icons/react'

export const AppFooter = () => {
  return (
    <Group justify="center" py={10} gap="xs">
      <Text ta="center" size="xs">
        Developed by
      </Text>

      <GithubLogoIcon />
      <Anchor
        href="https://github.com/michelsandre"
        target="_blank"
        size="xs"
        gradient={{
          from: 'light-dark(blue, orange)',
          to: 'light-dark(teal,yellow)',
        }}
        variant="gradient"
        fw={700}
      >
        michelsandre
      </Anchor>
    </Group>
  )
}
