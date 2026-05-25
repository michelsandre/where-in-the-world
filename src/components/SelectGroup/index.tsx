import { CountryResponse } from '@/types'
import { NativeSelect } from '@mantine/core'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const SelectGroup = ({ data }: { data: CountryResponse[] }) => {
  const searchParam = useSearchParams()
  const pathName = usePathname()
  const router = useRouter()

  const regions = [...new Set(data.map((item) => item.region))]
    .map((obj) => ({ label: obj, value: obj.toLowerCase() }))
    .sort((a, b) => a.value.localeCompare(b.value))

  regions.unshift({ label: 'Filter by region', value: '' })

  const handleFilter = (term: string) => {
    const params = new URLSearchParams(searchParam)

    if (term) {
      params.set('region', term)
    } else {
      params.delete('region')
    }

    router.replace(`${pathName}?${params.toString()}`, { scroll: false })
  }

  const inputStyles = {
    backgroundColor:
      'light-dark(var(--mantine-color-gray-0), var(--mantine-color-gray-9))',
  }

  return (
    <NativeSelect
      data={regions}
      defaultValue={searchParam.get('region')?.toString().toLowerCase()}
      onChange={(e) => handleFilter(e.target.value)}
      styles={{
        input: inputStyles,
      }}
    />
  )
}
