import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebaseConfig";



export const Authcontext =createContext(null)
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const Authprovider = ({children}) => {


    const [user,setUser] =useState(null)
    const [loading, setLoading] =useState(true)

    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signin =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout =() =>{
        setLoading(true);
        return signOut(auth)
    }


    const Googlesign = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    const updateuserProfile =(name,photo) =>{

        return updateProfile(auth.currentUser,{
            displayName :name ,
            photoURL : photo
        })

    }

    useEffect(()=>{
       const Unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log("current user ",currentUser);
            setLoading(false)
        });
        return()=>{
            return Unsubscribe();
        }
    },[])


    const Authinfo = { user, loading, createUser, signin, logout, updateuserProfile, Googlesign }
    return (
        <Authcontext.Provider value={Authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;