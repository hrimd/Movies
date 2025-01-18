/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import Link from 'next/link'
const directories = [
  { name: 'English', date: '15-jan-2025', url: `http://ftp.ctgfun.com/English/` },
  { name: 'Indian', date: '23-oct-2024', url: 'http://ftp.ctgfun.com/Indian/' },
  { name: 'Others', date: '15-jan-2025', url: 'http://ftp.ctgfun.com/Others/' },
  { name: 'TV_Series', date: '14-jan-2025', url: 'http://ftp.ctgfun.com/TV_Series/' },
];


export default function MoviesDirector() {
  console.log(directories)
  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Movies</h1>
   <hr />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
         {directories.map((dir) => ( 
             <div key={dir.name}
                 className="p-4 font-bold bg-white/95 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" >
            <Link  href={dir.url || `/${dir.name}/`}>
               <h2 className="text-blue-500 font-mono hover:underline">{dir.name}</h2>
                 </Link>
            <p className="mt-2 font-bold ">{dir.date}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
}
