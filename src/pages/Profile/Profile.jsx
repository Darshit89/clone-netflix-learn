import React from 'react'
import './Profile.scss'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, selectUser } from '../../redux/feature/userSlice'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const handleLogOut = () => {
        signOut(auth).then(() => {
            // localStorage.clear();
            dispatch(logOut())
            // navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='profile'>
            <div className="profile_body">
                <h1>Edit Profile</h1>
                <div className="profile_info">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="avatar image" className='profile_avatar' />
                    <div className="profile_detail">
                        <h2>{user.email}</h2>
                        <div className="profile_plans">
                            <button className="profile_signOut" onClick={handleLogOut}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile