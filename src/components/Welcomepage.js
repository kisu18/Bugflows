import React from "react"

const WelcomePage = (props) => {
  return (
    <div className="welcome">
      <h1> Welcome to Bugflows {props.name}!</h1>
      <button className="logoutbtn" onClick={props.logouthandler}>Log Out</button>
    </div>
  )
};

export default WelcomePage;
