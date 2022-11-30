import React, {useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contects/UserContexts';

const ModalType = () => {
    const data=useLoaderData()
    console.log(data)
    const {user} = useContext(AuthContext)
    console.log(user)
    const [users,setUser] = useState() 
    console.log(users)
    useEffect(()=>
    {
        fetch(`http://localhost:5000/users/${data?.email}`)
  .then((response) => response.json())
  .then((data) => setUser(data));
    },[data?.email])
   
    console.log(data.email)







    return (
        <div>



            
        </div>
    );
};

export default ModalType;