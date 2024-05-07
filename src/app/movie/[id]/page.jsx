import React from 'react'

const getMovie = async(id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b37c04a4e6a0f68c76efea44c1f4c273`)
    return await res.json();
}

const Page = async({params}) => {
    const id = params.id;
    const movieDetail = await getMovie(id)

    console.log(id, "id")

  return (
    <div className='relative p-7 min-h-screen'>
        <Image sytle={{objectFit:'cover'}} fill src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}/>
        <div className='absolute'>
            <div className='text-3xl font-bold my-3'>{movieDetail?.title}</div>
            <div className='w-1/2'>{movieDetail?.overview}</div>
            <div className='my-3'>{movieDetail?.release_date} - {movieDetail?.vote_average}</div>
            <div className='my-2 border w-32 hover:bg-white hover:text-black p-2 rounded-md text-center text-lg cursor-pointer'>Trail</div>

        </div>
    </div>
  )
}

export default page