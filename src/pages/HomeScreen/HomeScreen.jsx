import React from 'react'
import Nav from '../../components/Nav/Nav'
import Banner from '../../components/Banner/Banner'
import { rows } from '../../utils/constants/constants'
import Row from '../../components/Row/Row'

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            {rows.map((row, index) => <Row key={`${row.title}_index`} title={row.title} fetchUrl={row.url} isLarge={row.isLarge} />)}
        </div>
    )
}

export default HomeScreen