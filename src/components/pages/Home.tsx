'use client'

import { Badge, Grid, Stack } from '@mantine/core'
import { SearchInput } from '../SearchInput'
import { SelectGroup } from '../SelectGroup'
import { CountryResponse } from '@/types'
import { ListOfCards } from '../ListOfCards'

import { useSearchParams } from 'next/navigation'
import { BackTopButton } from '../BackTopButton'

export const HomeClient = ({ data }: { data: CountryResponse[] }) => {
  const searchParam = useSearchParams()
  const queryName = searchParam.get('name')?.toString().toLowerCase() ?? ''
  const queryRegion = searchParam.get('region')?.toString().toLowerCase() ?? ''

  const filteredData = data.filter((item) => {
    const name = item.name.common.toLowerCase().includes(queryName)
    const region =
      item.region.toLowerCase() === queryRegion || queryRegion === ''

    return name && region
  })

  return (
    <Stack gap={30} pb={25}>
      <BackTopButton />
      <Grid justify="space-between">
        <Grid.Col span={{ sm: 3, xs: 6 }}>
          <SearchInput />
        </Grid.Col>
        <Grid.Col span={{ sm: 3, xs: 6 }}>
          <SelectGroup data={data} />
        </Grid.Col>
      </Grid>
      <Grid>
        <Badge color="teal">Countries: {filteredData.length}</Badge>
        <Badge color="grape">
          Regions:{' '}
          {[...new Set(filteredData.map((item) => item.region))].length}
        </Badge>
      </Grid>

      <Grid>
        <ListOfCards data={filteredData} />
      </Grid>
    </Stack>
  )
}
