import { API_REST_COUNTRIES, CACHE_TIME } from '@/settings/constants'
import { FullNameResponse } from '@/types'

export async function getFullName(
  codes: string[]
): Promise<FullNameResponse[]> {
  if (codes.length <= 0) return []

  const stringCodes = codes.join(',')

  const response = await fetch(
    `${API_REST_COUNTRIES}/alpha/?codes=${stringCodes}&fields=name,cca3`,
    {
      next: { revalidate: CACHE_TIME },
    }
  )

  if (!response.ok) {
    console.log('Error on data fetching')
    return []
  }

  const data: FullNameResponse[] = await response.json()

  return data
}
