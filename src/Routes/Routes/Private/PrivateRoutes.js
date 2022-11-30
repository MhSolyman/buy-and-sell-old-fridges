import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../../Hooks/useSeller';

import { AuthContext } from '../../../Pages/Contects/UserContexts';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location =useLocation();
    
  


 const [users,isusers]=useSeller(user?.email)
 console.log(users)
console.log(user)
console.log(isusers)



 

    if(loading ){
        return <progress className="progress w-56"></progress>
    }
    if (user?.uid  ){
        return children

    }
    
    
    return <Navigate to ='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;