import React from "react";
import Customer from "../Components/Customer";
import LoginUI from "../Components/LoginUI";
import '../css/myStyle.css';
const Login = () => {
  return (
    <>
     
      <div>
        <div className="center mainHeader">
          <div className='HomeText'>Home </div>
          <span style={{color:'#f14d54'}}>&gt; Login</span>
        </div>
        <div>
          <div className='center'>
            <div className="loginheader">Login or Create an Account</div>
            <hr color="red" width='15%' />
          </div>
        </div>
      </div>
        <div style={{margin:'auto',width:'70%'}}>
        <div className="side-by-side" >
          <div className="customer"><Customer /></div>
          <div className="loginpart"><LoginUI /></div>
        </div>
        </div>
        
      </>);
}
export default Login;