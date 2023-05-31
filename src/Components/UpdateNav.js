import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import {loginContext}  from '../contexts/LoginContext';
import { toast } from 'react-toastify';
import '../css/header.css';
const UpdateNav = () => {
    const isLogin = useContext(loginContext);
    const LinkStyle = {
        textDecoration: 'none',
        margin: '15px',
        color: '#f14d54'
    }
    const cart = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        textDecoration: 'none',
        border: '1px solid #ccc',
        borderRadius: '4px',
        color: 'black',
        width: '100.48px',
        height: '40px'
    }
    const logoutbtn={
        marginRight:'10px',
        marginTop:'4px'
    }
    const logoutEvent=()=>{
        isLogin.setLogin(false);
        toast.success('Logout Successfully')
    }
    if (!isLogin.login) {
        return (
            <>
                 <div >
                    <Link to='/login' style={LinkStyle}>Login</Link>
                    <span className='pipe'></span>
                    <Link to='/register' style={LinkStyle} >Register</Link>
                </div>  
            </>
        );
        
    }
    else {
        return(
        <>
                <div >
                    <Link to='/product' style={LinkStyle}>View Book</Link>
                    <span className='pipe'></span>
                    <Link to='/edit' style={LinkStyle} >Edit Book</Link>
                    <span className='pipe'></span>
                    <Link to='/login' style={LinkStyle}>Login</Link>
                    <span className='pipe'></span>
                    <Link to='/register' style={LinkStyle} >Register</Link>
                    
                </div>
                <Button style={logoutbtn} onClick={logoutEvent}>Logout</Button>
        </>

        );
            
    }
}
export default UpdateNav;