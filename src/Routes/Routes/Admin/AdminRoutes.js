import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../../Hooks/useSeller';

import { AuthContext } from '../../../Pages/Contects/UserContexts';

const AdminRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location =useLocation();
    
  

 const [users,isusers]=useSeller(user?.email)


   

 

    if(loading  || isusers){
        return <p>Loading ....................</p>
    }
    if (user?.uid && users && users?.userType==="admin" ){
        return children

    }
    
    
    return <Navigate to ='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoutes;