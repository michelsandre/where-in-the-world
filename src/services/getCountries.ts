import { CountryResponse } from '@/types'
import { API_REST_COUNTRIES, CACHE_TIME } from '@/settings/constants'

export async function getCountries(): Promise<CountryResponse[]> {
  const response = await fetch(
    `${API_REST_COUNTRIES}/all?fields=name,capital,population,region,flags,cca3`,
    {
      next: { revalidate: CACHE_TIME },
    }
  )

  if (!response.ok) {
    console.log('Error on data fetching')
    return []
  }

  const data: CountryResponse[] = await response.json()

  return data
}
