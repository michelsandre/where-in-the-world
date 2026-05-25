import { HomeClient } from '@/components/pages/Home'
import { getCountries } from '@/services/getCountries'

export default async function Home() {
  const data = await getCountries()

  return <HomeClient data={data} />
}
