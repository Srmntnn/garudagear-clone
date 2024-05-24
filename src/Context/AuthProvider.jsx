import React, { createContext, useEffect, useState } from 'react'
import app from '../Components/Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //create user with gmail
    const signUpWithGmail = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    //login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logOut 
    const logOut = () => {
        return signOut(auth);
    }

    //useEffect
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentusers => {
            setUser(currentusers);
            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    })

    const AuthInfo = {
        user,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logOut
    }
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;