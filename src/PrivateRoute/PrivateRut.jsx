import React, { useContext } from 'react';
import { valueContext } from '../Rootlayout/Rootlayout';
import { Navigate } from 'react-router';

const PrivateRut = ({children}) => {

    const {userprofile}= useContext(valueContext)

    if(!userprofile?.email){
       
       return <Navigate to="/login"></Navigate>
      }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRut;