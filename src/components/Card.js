import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md sm:rounded-lg sm:border
    sm:border-slate-400 sm:m-2 group transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`} >
        <Image 
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200" 
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur" 
          blurDataURL="/spinner.svg" // Ensure this file exists or remove placeholder="blur"
          alt={result.title || result.name || "Image is not available"}
        />
        <div className='p-2'>
          <h2 className='truncate text-lg font-bold'>{result.title || result.name}</h2>
          <p className='line-clamp-2 text-md text-gray-600'>{result.overview}</p>
          <p className='flex items-center text-sm text-gray-500 mt-2'>
            {result.release_date || result.first_air_date}
            <FiThumbsUp className='w-5 h-5 mr-1 ml-3 text-blue-500'/> {result.vote_count ?? 0}
          </p>
        </div>
      </Link>
    </div>
  );
}
