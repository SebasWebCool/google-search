import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedRoutes = ({pass}) => {

    if(pass){
        return <Outlet/>
    }else{
        return 
    }


  
}

export default ProtectedRoutes