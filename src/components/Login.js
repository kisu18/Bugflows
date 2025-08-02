import React, { useState } from "react"


const Login = (props) => {
  const [email,setEmail]=useState();
  const [name,setName]=useState();

  const loginhandler=(e)=>{
      e.preventDefault();
      props.onlogin();
      props.onnamechange(name);
      alert(`Logged in as ${name}`);
        }
   
     return (
      <div>
      <div class="login-container">
      <h2>Login to Bugflows</h2>
      <form id="loginForm" onSubmit={loginhandler}>
        <input  type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}  required />
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" required />
        <button type="submit" >Login</button>
      </form>
      </div>
      </div>
    )
  }; 
    
  


export default Login;
 