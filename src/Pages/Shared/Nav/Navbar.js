import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contects/UserContexts';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const hndaleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>Item 1</li>
                            <li tabIndex={0}>

                                Parent



                            </li>
                            <li>Item 3</li>
                        </ul>

                    </div>
                    <div className="btn btn-ghost normal-case text-xl">daisyUI</div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>Item 1</li>
                        <li tabIndex={0}>

                            Parent



                        </li>
                        <li>Item 3</li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ? <> <div className="w-10 rounded-full">
                            <img src={user?.photoURL} alt="" />
                        </div><p>{user?.displayName}</p> <div className="btn btn-outline btn-primary mx-2" onClick={hndaleLogout}>Log Out</div></> : <><Link to={'/login'}> <div className="btn btn-outline btn-primary">Login</div></Link>

                            <Link to={'/register'}> <div className="btn btn-outline btn-primary mx-2">Register</div></Link></>
                    }

                </div>
            </div>

        </div>
    );
};

export default Navbar;