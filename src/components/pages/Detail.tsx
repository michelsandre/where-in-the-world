'use client'

import { DetailResponse, FullNameResponse } from '@/types'
import {
  AspectRatio,
  Badge,
  Button,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { ArrowFatLeftIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

type Props = {
  data: DetailResponse | null
  borders: FullNameResponse[]
}

export const DetailClient = ({ data, borders }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const fromParam = searchParams.get('from')

  const backUrl = fromParam ? `/?${fromParam}` : '/'

  const infos: { label: string; value: number | string | undefined }[] = [
    { label: 'Official Name', value: data?.name.official },
    { label: 'Top Level Domain', value: data?.tld.join(' | ') },
    { label: 'Population', value: data?.population.toLocaleString() },
    {
      label: 'Currencies',
      value: data
        ? Object.values(data?.currencies)
            .map((item) => item.name)
            .join(' | ')
        : '',
    },
    { label: 'Region', value: data?.region },
    {
      label: 'Languages',
      value: data ? Object.values(data.languages).join(' | ') : '',
    },
    { label: 'Sub Region', value: data?.subregion },
    { label: 'Capital', value: data?.capital.join(' | ') },
  ]

  return (
    <Stack gap={30} pb={25}>
      <Grid>
        <Grid.Col>
          <Button
            leftSection={<ArrowFatLeftIcon size={20} />}
            variant="default"
            px={30}
            onClick={() => router.replace(backUrl)}
          >
            Back
          </Button>
        </Grid.Col>
      </Grid>

      <Grid gap={60} align="center">
        <Grid.Col span={{ lg: 5, md: 6 }}>
          <AspectRatio ratio={800 / 500}>
            <Image
              src={data?.flags.svg ?? ''}
              alt={data?.flags.alt ?? 'not found image'}
              width={800}
              height={500}
              loading="eager"
              className="rounded-xl"
            />
          </AspectRatio>
        </Grid.Col>
        <Grid.Col span={{ lg: 7, md: 6 }}>
          <Grid align="start">
            <Grid.Col span={12} mb={40}>
              <Title order={2}>{data?.name.common}</Title>
            </Grid.Col>
            {infos.map((info, i) => (
              <Grid.Col key={i} span={{ lg: 6, md: 12, sm: 6 }}>
                <Group gap="xs">
                  <Text fw={700}>{info.label}:</Text>
                  <Text
                    tt={info.label === 'Currencies' ? 'capitalize' : 'none'}
                  >
                    {info.value}
                  </Text>
                </Group>
              </Grid.Col>
            ))}
            <Grid.Col span={12} mt={40}>
              <Grid>
                <Grid.Col span="content">
                  <Text fw={700}>Border Countries:</Text>
                </Grid.Col>
                <Grid.Col span="auto">
                  <Group gap="xs">
                    {borders.length > 0
                      ? borders.map((border) => (
                          <Badge
                            size="lg"
                            color="teal"
                            key={border.cca3}
                            component={Link}
                            href={`/detail/${border.cca3}`}
                            style={{
                              cursor: 'pointer',
                            }}
                          >
                            {border.name.common}
                          </Badge>
                        ))
                      : 'None'}
                  </Group>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}
