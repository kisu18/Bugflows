import Login from './components/Login';
import WelcomePage from './components/Welcomepage';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [logged,setLogged]=useState(false);
  const [name,setName]=useState('');
  const onlogin=()=>setLogged(true);
  const onnamechange=(n)=>setName(n);
  const onlogout=()=>setLogged(false);

  useEffect(
    ()=>{},[logged]
  )
  return (
    <div>
      {!logged?
    <div className="App">
      <Login onlogin={onlogin} onnamechange={onnamechange}/>
    </div>: <div className="App">
      <WelcomePage name={name} logouthandler={onlogout}/>
    </div>}
    
    </div>
  );
}

export default App;
