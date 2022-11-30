import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contects/UserContexts';

const Navbar = () => {


    const [users, setUsers] = useState('')

    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    //   const { data: users = {} } = useQuery({
    //     queryKey: ['users'],
    //   queryFn: async () => {
    //     const res = await fetch(`http://localhost:5000/users/${user?.email}`);
    //   const data = await res.json();
    // return data;
    //}

    //})

    useEffect(() => {

        fetch(`http://localhost:5000/users/${user?.email}`)
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, [user?.email]);


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
                        <li><button className="btn btn-ghost"> <Link to={'/blog'}>Blog</Link> </button></li>
                            <li>{
                                users?.userType === "admin" && user?.uid ? <Link to={'/allSellers'}><button className="btn btn-ghost"> All Sellers</button></Link> : <> </>
                            }</li>
                            <li tabIndex={0}>


                                {
                                    users?.userType === "admin" && user?.uid ? <Link to={'/allbuyers'}><button className="btn btn-ghost">  All Buyers </button></Link> : <> </>
                                }


                            </li>
                            <li>{
                                users?.userType === "admin" && user?.uid ? <Link to={'/reporteditems'}><button className="btn btn-ghost">  Reported Items</button></Link> : <> </>
                            }</li>
                            <li> {
                                users?.userType === "seller" && user?.uid ? <Link to={'/Mybuyers'}><button className="btn btn-ghost"> My Buyers</button></Link> : <> </>
                            }</li>
                            <li> {
                                users?.userType === "seller" && user?.uid ? <Link to={'/MyProducts'}><button className="btn btn-ghost"> My Products</button></Link> : <> </>
                            }</li>
                            <li> {
                                users?.userType === "seller" && user?.uid ? <Link to={'/Addproduct'}><button className="btn btn-ghost">Add A product</button></Link> : <> </>
                            }</li>
                            <li> {
                                users?.userType === "buyer" && user?.uid ? <Link to={'/Myorder'}><button className="btn btn-ghost">My orders</button></Link> : <> </>
                            }</li>
                        </ul>

                    </div>
                    <div className="btn btn-ghost normal-case text-xl">
                        Old fridge for sale</div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>{
                            users?.userType === "admin" && user?.uid ? <Link to={'/allSellers'}><button className="btn btn-ghost"> All Sellers</button></Link> : <> </>
                        }</li>
                        <li tabIndex={0}>

                        <li><button className="btn btn-ghost"> <Link to={'/blog'}>Blog</Link> </button></li>

                            {
                                users?.userType === "admin" && user?.uid ? <Link to={'/allbuyers'}><button className="btn btn-ghost">  All Buyers </button></Link> : <> </>
                            }


                        </li>
                        <li>{
                            users?.userType === "admin" && user?.uid ? <Link to={'/reporteditems'}><button className="btn btn-ghost">  Reported Items</button></Link> : <> </>
                        }</li>
                        <li> {
                            users?.userType === "seller" && user?.uid ? <Link to={'/Mybuyers'}><button className="btn btn-ghost"> My Buyers</button></Link> : <> </>
                        }</li>
                        <li> {
                            users?.userType === "seller" && user?.uid ? <Link to={'/MyProducts'}><button className="btn btn-ghost"> My Products</button></Link> : <> </>
                        }</li>
                        <li> {
                            users?.userType === "seller" && user?.uid ? <Link to={'/Addproduct'}><button className="btn btn-ghost">Add A product</button></Link> : <> </>
                        }</li>
                        <li> {
                            users?.userType === "buyer" && user?.uid ? <Link to={'/Myorder'}><button className="btn btn-ghost">My orders</button></Link> : <> </>
                        }</li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid && users?.userType ? <> <div className="w-10 rounded-full">
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