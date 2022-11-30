import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ModalType = () => {
    const data=useLoaderData()
    const [user,setUser] = useState() 
    console.log(user)
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