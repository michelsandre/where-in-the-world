import { DetailResponse } from '@/types'
import { API_REST_COUNTRIES, CACHE_TIME } from '@/settings/constants'

export async function getDetails(code: string): Promise<DetailResponse | null> {
  const response = await fetch(
    `${API_REST_COUNTRIES}/alpha/${code}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags,cca3`,
    {
      next: { revalidate: CACHE_TIME },
    }
  )

  if (!response.ok) {
    console.log('Error on data fetching')
    return null
  }

  const data: DetailResponse = await response.json()

  return data
}
