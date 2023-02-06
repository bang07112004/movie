import BackToTopButton from "@/components/BackToTopButton ";
import Results from "@/components/Results";
import Link from "next/link";

const API_KEY = process.env.API_KEY;
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  let film = [];
  for (let i = 1; i <= 10; i++) {
    const url = `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=${i}`;

    const res = await fetch(url, { next: { revalidate: 10000 } });
    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();
    film = film.concat(data.results);
  }
  return (
    <div>
      <Results results={film} />
      <BackToTopButton />
    </div>
  );
}
// "use client";
// import Results from "@/components/Results";
// import { useEffect, useState } from "react";

// const API_KEY = process.env.API_KEY;
// export default function Home({ searchParams }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pages, setPages] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const genre = searchParams.genre || "fetchTrending";
//       let film = [];
//       for (let i = 1; i <= 2; i++) {
//         const url = `https://api.themoviedb.org/3/${
//           genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
//         }?api_key=${API_KEY}&language=en-US&page=${i}`;

//         const res = await fetch(url, {
//           timeout: 30000,
//           next: { revalidate: 10000 },
//         });
//         if (!res.ok) throw new Error("Failed to fetch data");

//         const data = await res.json();
//         film = film.concat(data.results);
//       }
//       setPages([
//         { page: 1, results: film.slice(0, 20) },
//         { page: 2, results: film.slice(20, 40) },
//         { page: 3, results: film.slice(40, 60) },
//         { page: 4, results: film.slice(60) },
//       ]);
//     };
//     fetchData();
//   }, [searchParams]);
//   return (
//     <div>
//       {pages.length > 0 && (
//         <div>
//           <h2>Page {currentPage}</h2>
//           <Results results={pages[currentPage - 1].results} />
//         </div>
//       )}
//       <div>
//         {currentPage > 1 && (
//           <button onClick={() => setCurrentPage(currentPage - 1)}>
//             Previous Page
//           </button>
//         )}
//         {currentPage < 4 && (
//           <button onClick={() => setCurrentPage(currentPage + 1)}>
//             Next Page
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
