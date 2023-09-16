import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaTachometerAlt, FaUser,FaRegFolderOpen } from 'react-icons/fa'
import { TbLogout2 } from 'react-icons/tb'
import { ImCart } from 'react-icons/im'
import { FiLogIn } from 'react-icons/fi'
import { FcAndroidOs, FcHome,FcSurvey,FcNews } from 'react-icons/fc'
import useAndroid from '../hooks/useAndroid'
import { AuthContext } from '../Provider/AuthProvider'

const Dashboard = () => {
    const { LogOut, user } = useContext(AuthContext)
    console.log(user)

    const [carts, refetch] = useAndroid();
    // console.log(carts)
    const handleLogout = () => {
        LogOut()
            .then(result => {

            })
            .catch(error => {
                // console.log(error);
            })
    }

    return (


        <div className="drawer mx-auto lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F9FAFB] flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-screen bg-gray-400  text-base-content">
                    
                    {
                        user && <div className='flex items-center gap-1 justify-center py-[10px] border-b-2 border-[#ededed]/[0.3]'>


                            <img className='w-5 rounded-full' src={user.photoURL} alt="" srcset="" />


                            <h1 className='text-white uppercase lg:text-[18px] leading-[24px] font-extrabold cursor-pointer'>{user.displayName}</h1>


                        </div>
                    }
                   

                    <div className='grid text-white items-center gap-4 justify-center py-[20px] border-b-2 border-[#ededed]/[0.3]'>
                        <li><NavLink to='userCart'><ImCart />Cart <div class="badge badge-secondary">+{carts?.length}</div></NavLink></li>
                        <li><NavLink to='allUser'><FaUser />All user</NavLink></li>
                        <li><NavLink to='allDashboard'><FaRegFolderOpen />Dashboard</NavLink></li>
                        <li><NavLink to='postJobs'><FaUser />Post Jobs</NavLink></li>
                        <li><NavLink to='postEvents'><FcSurvey />Post Events</NavLink></li>
                        <li><NavLink to='postCourse'><FaUser />Post Course</NavLink></li>
                        <li><NavLink to='postNews'><FcNews />Post News</NavLink></li>
                    </div>

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