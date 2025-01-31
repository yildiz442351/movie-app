import React from 'react'

const page = ({searchParams}) => {

    const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=`b37c04a4e6a0f68c76efe44c1f4c273&language=1`,
    {next: {revalidate: 10000}})

     const data = await res.json();

    console.log(data, "data")
  return (
    <div className='flex items-center flex-wrap gap-3'>
        {
            data?.reults?.map((dt,i) =>(
                  <Movies key={i} dt={dt}/>
            ))
        }
    </div>
      )
}

export default page