import { CountryCard } from '../CountryCard'
import { CountryResponse } from '@/types'

import { EmptyState } from '../EmptyState'
import { Grid } from '@mantine/core'

export const ListOfCards = ({ data }: { data: CountryResponse[] }) => {
  if (data.length <= 0) {
    return (
      <Grid.Col span={12}>
        <EmptyState />
      </Grid.Col>
    )
  }
  return (
    <>
      {data.map((item) => (
        <CountryCard key={item.name.common.toLowerCase()} item={item} />
      ))}
    </>
  )
}
