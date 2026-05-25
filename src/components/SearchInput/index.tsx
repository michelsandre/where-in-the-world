'use client'
import { TextInput } from '@mantine/core'
import { useDebouncedCallback } from '@mantine/hooks'
import { MagnifyingGlassIcon } from '@phosphor-icons/react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const SearchInput = () => {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const router = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('name', term)
    } else {
      params.delete('name')
    }

    router.replace(`${pathName}?${params.toString()}`, { scroll: false })
  }, 200)

  const inputStyles = {
    backgroundColor:
      'light-dark(var(--mantine-color-gray-0), var(--mantine-color-gray-9))',
  }
  return (
    <TextInput
      leftSection={<MagnifyingGlassIcon />}
      placeholder="Search for a country..."
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get('name')?.toString()}
      w="100%"
      styles={{
        input: inputStyles,
      }}
    />
  )
}
