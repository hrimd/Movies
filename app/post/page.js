import MoviesDirector from "@/lib/MoviesDirector";
import Link from "next/link";
import MoviesPage from "./[Id]/page";
// const movies = [
//   { title: "2073", path: "Absolution.2024.1080p.WEBRip.x264 [DDN].mp4      " },
// ]; // Add more movies here ];
// console.log(movies);

const post = async () => {
  return (
    <div className="container mx-auto p-4">
    <MoviesPage/>
      <Link href="http://ftp.ctgfun.com" target="blank">
        <div className="text-blue-500 hover:underline">
          Click here to watch the video
        </div>
      </Link>
      <MoviesDirector /> 
       <iframe width="560" height="315"
      src="https://www.youtube.com/embed/NgrljB7UU34?si=dwvInVYGPzzqSvHF"
        title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        >
    </iframe>
    </div>
  );
};

export default post;
