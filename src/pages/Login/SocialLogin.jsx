import React from 'react'
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch(`https://server2-abdurrahim220.vercel.app/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })
}

    return (
        <div className='grid mt-3 justify-items-center'>
            <h1 className='text-2xl font-bold my-2'>Social Login</h1>
            <div className='flex  justify-center'>
                <button onClick={() => { handleGoogleLogin() }}><FcGoogle size={50} /></button>
            </div>
        </div>
    )
}

export default SocialLogin