import React from 'react'
import './Row.css'  
import instance from '../instance';
import { useEffect } from 'react';
import { useState } from 'react';

function Row({ title, fetchUrl,isPoster }) {
    /* console.log(title, fetchUrl); */
    console.log(isPoster);
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original";


    const fetchData = async () => {
        const response = await instance.get(fetchUrl)
        console.log(response.data.results);
        setMovies(response.data.results)
    }
    console.log(movies);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='row'>
            <h3>{title}</h3>
            <div className="movie-row">
                
                { movies.map(item=>(<img className={`movie ${isPoster?'movie-poster':'movie'}`} src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt="poster" />))
                    }
            </div>
        </div>
    )
}

export default Row