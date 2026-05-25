'use client'

import { Flex, Group, ThemeIcon, Title } from '@mantine/core'
import { ThemeSwitch } from '../ThemeSwitch'
import { GlobeIcon } from '@phosphor-icons/react'

export const AppHeader = () => {
  return (
    <Flex
      h="100%"
      px="xl"
      justify={{ base: 'center', xs: 'space-between' }}
      align="center"
      wrap="wrap"
    >
      <Group>
        <ThemeIcon
          visibleFrom="xs"
          size={58}
          variant="transparent"
          color="teal"
        >
          <GlobeIcon size="100%" />
        </ThemeIcon>
        <Title order={2}>Where in the world?</Title>
      </Group>

      <ThemeSwitch />
    </Flex>
  )
}
