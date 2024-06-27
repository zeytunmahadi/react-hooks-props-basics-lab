import React from "react";
import Links from ../Links

function About(props) {
  if (! props.bio){
    return <div> no bio found <div/>
    
  }else{
      return (
        <div id="about">
          <h2>About Me</h2>
          <p>Put the bio in here</p>
          <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
          {/* add your <Links /> component here */}
          <link github ={props.github} linkedin ={props.linkedin}
        </div>
      )
    
  }
  

}

export default About;
