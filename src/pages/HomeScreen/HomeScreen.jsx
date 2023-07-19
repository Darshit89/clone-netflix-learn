import React from 'react'
import { rows } from '../../utils/constants/constants'
import Row from '../../components/Row/Row'
import './homeScreen.scss'

function HomeScreen() {
    return (
        <div className='homeScreen'>
            {rows.map((row, index) => <Row key={`${row.title}_index`} title={row.title} fetchUrl={row.url} isLarge={row.isLarge} />)}
        </div>
    )
}

export default HomeScreen