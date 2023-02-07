import BackToTopButton from "@/components/BackToTopButton ";
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  let film = [];
  for (let i = 1; i <= 10; i++) {
    const url = `https://api.themoviedb.org/3/${
      genre === "fetchTopRated"
        ? "movie/top_rated"
        : genre === "fetchTrending"
        ? "trending/all/week"
        : genre === "fetchTV"
        ? "tv/top_rated"
        : "undefined"
    }?api_key=${API_KEY}&language=en-US&page=${i}`;
    const res = await fetch(url, { next: { revalidate: 10000 } });
    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();
    film = film.concat(data.results);
  }
  return (
    <div>
      <Results results={film} />
    </div>
  );
}
