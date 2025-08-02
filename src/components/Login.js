import React, { useRef } from "react"


const Login = (props) => {
   
    const name=useRef();
    const loginhandler=(e)=>{
        e.preventDefault();
        props.onlogin();
        props.onnamechange(name.current.value);
        alert('Logged in');
         }
    
    
    return (
      <div>
      <div class="login-container">
      <h2>Login to Bugflows</h2>
      <form id="loginForm" onSubmit={loginhandler}>
        <input ref={name} type="text" placeholder="Name"   required />
        <input type="email" placeholder="Email"  required />
        <input type="password" placeholder="Password" required />
        <button type="submit" >Login</button>
      </form>
      </div>
      </div>
    )
};

export default Login;
 