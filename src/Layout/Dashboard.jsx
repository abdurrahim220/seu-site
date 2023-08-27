import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { TbLogout2 } from 'react-icons/tb'
import { ImCart } from 'react-icons/im'
import { FiLogIn } from 'react-icons/fi'
import { FcAndroidOs, FcHome } from 'react-icons/fc'
import useAndroid from '../hooks/useAndroid'
import { AuthContext } from '../Provider/AuthProvider'

const Dashboard = () => {
    const { LogOut } = useContext(AuthContext)

    const [carts, refetch] = useAndroid();
    console.log(carts)
    const handleLogout = () => {
        LogOut()
            .then(result => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (

       
            <div className="drawer mx-auto lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content">

                        <li><NavLink to='userCart'><ImCart />Cart <div class="badge badge-secondary">+{carts?.length}</div></NavLink></li>
                        <li><NavLink to='allUser'><FaUser />All user</NavLink></li>
                        <div className='divider'></div>
                        <li><NavLink to='/'><FcHome />Home</NavLink></li>
                        <li><NavLink to='/android'><FcAndroidOs size={20} />AndroidCommunity</NavLink></li>
                        <li><NavLink to='login'><FiLogIn />Log In</NavLink></li>
                        <li><NavLink onClick={handleLogout} ><TbLogout2 />Log Out</NavLink></li>

                    </ul>

                </div>
            
        </div>

    )
}

export default Dashboard