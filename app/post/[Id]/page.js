// pages/movies.js
import Link from "next/link";
import styles from "../../styles/MovieCard.module.css";
// import { parseUrl } from "../../post/[Id]/url/parseUrl";
const movies = [
  {
    title: "2073",
    path: "http://ftp.ctgfun.com/Indian/South%20Indian%20Movies/100%20Crores%20%282024%29%20Telugu%20720p%20WEBRip%20x264%20ESub%20%5BDDN%5D/",
  },
  {
    title: "A Different Man",
    path: "http://ftp.ctgfun.com/English/A.Different.Man.2024.1080p.WEBRip.x264%20%5BDDN%5D/",
  },
  { title: "A Real Pain", path: "http://ftp.ctgfun.com/English/Afraid.2024.1080p.WEBRip.x264/" },
  // Add more movies here
];

const MoviesPage = () => {
  return (
    <div>
      <h1>Movies List</h1>
      <div className="grid grid-cols-6">
        {movies.map((movie, index) => (
          <div key={index} className={styles.movieCard}>
            <Link href={movie.path}>
              <h1>{movie.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
