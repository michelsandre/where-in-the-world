import { Anchor, AppShell, Group, Text } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { AppHeader } from '../Header'

import { GithubLogoIcon } from '@phosphor-icons/react'
import { AppFooter } from '../Footer'

export const AppWrapper = ({ children }: PropsWithChildren) => {
  return (
    <AppShell header={{ height: { base: 100, xs: 100 } }} padding="xl">
      <AppShell.Header
        className="shadow"
        bg="light-dark(var(--mantine-color-gray-0), var(--mantine-color-gray-9))"
      >
        <AppHeader />
      </AppShell.Header>
      <AppShell.Main bg="light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-8))">
        {children}
      </AppShell.Main>
      <AppShell.Footer bg="light-dark(var(--mantine-color-dark-0), var(--mantine-color-dark-9))">
        <AppFooter />
      </AppShell.Footer>
    </AppShell>
  )
}
