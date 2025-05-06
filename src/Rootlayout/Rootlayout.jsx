import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const valueContext = createContext()

const Rootlayout = () => {
    const [userprofile,setUserprofile] = useState(null);

    console.log(userprofile)

    const usesignup = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                alert("succeassfully")
              
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                alert("succerdssdf");
                // ..
            });


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
            // An error happened.
          });

    }



    useEffect(()=>{

       const unscribe = onAuthStateChanged(auth, (userprofile) => {

            // console.log(userprofile)

            setUserprofile(userprofile);

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
        handelLogout
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