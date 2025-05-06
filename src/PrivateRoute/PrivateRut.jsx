import React, { useContext } from 'react';
import { valueContext } from '../Rootlayout/Rootlayout';
import { Navigate, useLocation } from 'react-router';

const PrivateRut = ({children}) => {

    const {userprofile,loding}= useContext(valueContext)
    
    const location = useLocation();
    console.log(location)

    if(loding){
        return<div>Loging.....</div>
    }

    if (!userprofile?.email) {
        return <Navigate to="/login" state={{ from: location.pathname }} />;
    }


    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRut;