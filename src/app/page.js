import Image from "next/image";
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

async function fetchMovies(genre) {
  const url = `https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}&language=en-US&page=1`;

  const res = await fetch(url, { next: { revalidate: 10000 } });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.results;
}

export default async function Home({ searchParams }) {
  const genre = searchParams?.genre || "fetchTrending";
  const results = await fetchMovies(genre);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
