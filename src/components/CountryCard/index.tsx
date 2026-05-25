import { CountryResponse } from '@/types'
import { AspectRatio, Card, Grid, List, Text, ThemeIcon } from '@mantine/core'
import { CityIcon, MapPinIcon, UsersIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export const CountryCard = ({ item }: { item: CountryResponse }) => {
  const searchParam = useSearchParams()
  const currentParams = searchParam.toString()

  const destination = currentParams
    ? `/detail/${item.cca3}?from=${encodeURIComponent(currentParams)}`
    : `/detail/${item.cca3}`

  return (
    <Grid.Col span={{ xl: 2, lg: 3, md: 4, xs: 6 }}>
      <Card
        component="a"
        href={destination}
        shadow="sm"
        padding="md"
        withBorder
        mih={400}
        bg="light-dark(var(--mantine-color-gray-0), var(--mantine-color-gray-9))"
      >
        <Card.Section>
          <AspectRatio ratio={800 / 500}>
            <Image
              src={item.flags.svg}
              alt={item.flags.alt}
              width={800}
              height={500}
            />
          </AspectRatio>
        </Card.Section>

        <Text fw="bold" mt="xl" mb="md" size="md">
          {item.name.common}
        </Text>

        <List c="dimmed" size="sm" center spacing="xs" pl="xs">
          <List.Item
            icon={
              <ThemeIcon radius="lg" color="teal" size="sm">
                <UsersIcon />
              </ThemeIcon>
            }
          >
            <strong>Population:</strong> {item.population.toLocaleString()}
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon radius="lg" color="teal" size="sm">
                <MapPinIcon />
              </ThemeIcon>
            }
          >
            <strong>Region:</strong> {item.region}
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon radius="lg" color="teal" size="sm">
                <CityIcon />
              </ThemeIcon>
            }
          >
            <strong>Capital:</strong> {item.capital}
          </List.Item>
        </List>
      </Card>
    </Grid.Col>
  )
}
