import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const valueContext = createContext()

const Rootlayout = () => {
    const [userprofile,setUserprofile] = useState(null);
    const [loding , setLoding] = useState(true);
    const provider = new GoogleAuthProvider();

   const google = () =>{

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


   }

    const usesignup = (email, password) => {

       return createUserWithEmailAndPassword(auth, email, password)
           
    }

    const uselogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUserprofile(user);
                // console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage)
            });
    }

    const handelLogout = ()=>{

        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error)
          });

    }



    useEffect(()=>{

       const unscribe = onAuthStateChanged(auth, (userprofile) => {

            // console.log(userprofile)

            setUserprofile(userprofile);
            setLoding(false);

            if (userprofile) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = userprofile.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          });

          return ()=>{
            unscribe();
          }

    },[])




    const contextValues = {
        usesignup,
        uselogin,
        userprofile,
        handelLogout,
        loding,
        google
    }

// console.log(userprofile);
    return (
        <div>
            <valueContext.Provider value={contextValues}>

                <Navbar></Navbar>
                <div className='min-h-[calc(100vh-116px)]'>
                    {/* <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16'> */}
                    <Outlet></Outlet>
                    {/* </div> */}
                </div>



            </valueContext.Provider>
            <Footer></Footer>
        </div>
    );
};

export default Rootlayout;