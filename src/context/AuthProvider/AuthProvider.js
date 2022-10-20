import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user ,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider()

  const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const singIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSingIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  const updateUserProfile = profile => {
    return updateProfile(auth.currentUser,profile)
  }
  const verifyEmail =() => {
    return sendEmailVerification(auth.currentUser)
  } 


  useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth,(currentUser)=> {
      if(currentUser === null || currentUser.emailVerified) {
        setUser(currentUser)
      }
      setLoading(false)
    })
    return () => unSubscribe()
  },[])

  const authInfo = {
    user,
    googleSingIn,
    logOut,
    createUser,
    singIn,
    loading, 
    updateUserProfile,
    verifyEmail,
    setLoading
  }

  return (
    <AuthContext.Provider value={authInfo}> 
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;