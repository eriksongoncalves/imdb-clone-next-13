import Results from '@/components/Results'

const TMDB_API_KEY = process.env.TMDB_API_KEY
const TMDB_BASE_URL = process.env.TMDB_BASE_URL

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending'
  const filterTypeUrl =
    genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
  const URL = `${TMDB_BASE_URL}/${filterTypeUrl}?api_key=${TMDB_API_KEY}&language=en-US&page=1`

  const res = await fetch(URL, { next: { revalidate: 10000 } })
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const results = data.results

  return <Results results={results} />
}
