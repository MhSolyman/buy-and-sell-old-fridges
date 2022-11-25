import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../Firebace/firebase.init';




export const AuthContext = createContext();


const auth = getAuth(app)

const UserContexts = ({ children }) => {

    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

useEffect(()=>{

},[])



    const authInfo = { user, createUser,signIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;