export interface CountryResponse {
  name: {
    common: string
    official: string
    nativeName: Record<string, { official: string; common: string }>
  }
  capital: Array<string>
  region: string
  population: number
  flags: {
    svg: string
    alt: string
  }
  cca3: string
}

export interface DetailResponse extends CountryResponse {
  subregion: string
  tld: Array<string>
  currencies: Record<string, { symbol: string; name: string }>
  languages: Record<string, string>
  borders: Array<string>
}

export type FullNameResponse = Pick<CountryResponse, 'name' | 'cca3'>
