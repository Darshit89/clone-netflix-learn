import React, { useEffect, useState } from 'react'
import './Banner.scss'
import { Axios } from '../../utils/axios/axios'
import { getImage } from '../../utils/helper/common'
import { requests } from '../../utils/constants/constants'

function Banner() {
    const [movies, setMovies] = useState([])

    const fetchData = async () => {
        const res = await Axios.get(requests.fetchNetflixOriginals)
        setMovies(res.results[Math.floor(Math.random() * res.results.length - 1)])
    }

    useEffect(() => {
        fetchData()
    }, [])


    const truncate = (string, n) => {
        return string?.length > n ? `${string.substr(0, n - 1)}....` : string
    }
    return (
        <header className='banner' style={{ backgroundImage: `url(${getImage(movies?.backdrop_path)})`, backgroundSize: "cover", backgroundPosition: 'center center' }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movies?.title || movies?.name || movies?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movies?.overview, 120)}
                </h1>
            </div>
            <div className="banner_fadeButton">

            </div>
        </header>
    )
}

export default Banner