import React from 'react'
import './Login.scss'
import { useState } from 'react'
import SignIn from '../../components/SignIn/SignIn'

function Login() {
    const [signIn, setsignIn] = useState(false)

    return (
        <div className='login'>
            <div className="login_backGround">
                <img className='login_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="login_backGround" />
                <button onClick={() => setsignIn(true)} className="login_btns">Sign In</button>
                <div className="login_gradiant" />
            </div>
            <div className="login_content">
                {signIn ? <SignIn /> : (<div>
                    <h1>Unlimited movies, TV shows and more</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.
                    </h3>
                    <div className="login_input">
                        <form action="">
                            <input type="email" placeholder="Email Address" />
                            <button onClick={() => setsignIn(true)} className="form_btn">GET STARTED</button>
                        </form>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Login