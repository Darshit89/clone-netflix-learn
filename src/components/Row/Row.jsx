import React, { useEffect, useState } from 'react'
import './Row.scss'
import { Axios } from '../../utils/axios/axios'
import { getImage } from '../../utils/helper/common'

function Row({ title, fetchUrl, isLarge }) {
    const [movies, setMovies] = useState([])

    const fetchData = async () => {
        const res = await Axios.get(fetchUrl)
        console.log('res: ', res);
        setMovies(res.results)
    }

    useEffect(() => {
        fetchData()
    }, [fetchUrl])
    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row_posters'>
                {movies?.map(movie => (
                    ((movie.poster_path || movie?.backdrop_path) && <img key={movie?.id} className={`row_poster ${isLarge ? 'row_posterLarge' : ''} `} src={getImage(isLarge ? movie.poster_path : movie?.backdrop_path)} alt={movie.name} />)
                ))}
            </div>
        </div>
    )
}

export default Row