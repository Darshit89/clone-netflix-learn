import React, { useEffect, useState } from 'react'
import './nav.scss'
function Nav() {
    const [show, setshow] = useState(false)
    console.log('show: ', show);

    const transistionNavbar = () => {
        if (window.scrollY > 100) {
            setshow(true)
        } else {
            setshow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transistionNavbar)
        return () => window.removeEventListener('scroll', transistionNavbar)
    }, [])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_content ">
                <img src='https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024' className='nav_logo' alt='nav-logo' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className='avatar_logo' alt='avatar-logo' />
            </div>
        </div>
    )
}

export default Nav