import React, { createContext } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export const valueContext = createContext()

const Rootlayout = () => {


    const usesignup = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });


    }

    const uselogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage)
            });
    }

    const contextValues = {
        usesignup,
        uselogin
    }


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