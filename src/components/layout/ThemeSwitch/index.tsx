'use client'

import { Button, Group, useMantineColorScheme } from '@mantine/core'
import { MoonIcon, SunIcon } from '@phosphor-icons/react'

export const ThemeSwitch = () => {
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <Button onClick={() => toggleColorScheme()} variant="subtle" color="gray">
      <Group lightHidden gap="xs">
        <SunIcon size={20} />
        <span>Light Theme</span>
      </Group>
      <Group darkHidden gap="xs">
        <MoonIcon size={20} />
        <span>Dark Theme</span>
      </Group>
    </Button>
  )
}
