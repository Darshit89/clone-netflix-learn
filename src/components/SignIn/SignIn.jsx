import React, { useRef, useState } from 'react'
import './SignIn.scss'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const [error, seterror] = useState(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const Navigate = useNavigate()
    const handleRegister = async (e) => {
        e.preventDefault()

        try {
            const res = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            if (res) {
                seterror(null)
                emailRef.current.value = null
                passwordRef.current.value = null
            }
        } catch (error) {
            seterror(error.message.split('/')[1].replace(')', ''))
            emailRef.current.value = null
            passwordRef.current.value = null
        }
    }

    const handlesignIn = async (e) => {
        e.preventDefault()
        try {
            const res = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            seterror(null)
            if (res) {
                Navigate('/')
            }
        } catch (error) {
            seterror(error.message.split('/')[1].replace(')', ''))
        }
    }

    return (
        <div className='signIn'>
            <h1>SignIn</h1>
            <form action="">
                <input type="email" ref={emailRef} placeholder="Email Address" />
                <input type="password" ref={passwordRef} placeholder="Password" />
                {error && <p className='error'>{error}</p>}
                <button type='submit' onClick={handlesignIn}>Sign In</button>
                <h4>
                    <span className="newto_netflix">
                        New to Netflix?
                    </span>
                    <span className="signUp_link" onClick={handleRegister}>
                        Sign up now
                    </span>
                </h4>
            </form>
        </div>
    )
}

export default SignIn