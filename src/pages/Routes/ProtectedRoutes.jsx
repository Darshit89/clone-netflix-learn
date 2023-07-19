import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Login from '../Login/Login'
import { Navigate } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, selectUser } from '../../redux/feature/userSlice';
import Nav from '../../components/Nav/Nav';
import Banner from '../../components/Banner/Banner';


function ProtectedRoutes() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    console.log('pathname: ', pathname);
    console.log('location: ', location);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(logIn({
                    uid: user.uid,
                    email: user.email
                }))
            } else {
                dispatch(logOut)
            }
        })
    }, [])


    return (user ? <>
        <Nav />
        {pathname === '/' ? <Banner /> : <></>}
        <Outlet />
    </> : <Navigate to='/login' />)
}

export default ProtectedRoutes