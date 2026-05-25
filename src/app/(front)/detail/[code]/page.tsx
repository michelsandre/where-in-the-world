import { DetailClient } from '@/components/pages/Detail'
import { getDetails } from '@/services/getDetails'
import { getFullName } from '@/services/getFullName'

export default async function Detail({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params
  const data = await getDetails(code)
  const borders = await getFullName(data?.borders ?? [])

  return <DetailClient data={data} borders={borders} />
}
