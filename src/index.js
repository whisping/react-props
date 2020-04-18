import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return <div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.phone}</p>
    <p>{props.mail}</p>
  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" phone="+123 456 789" mail="b@beyonce.com"/>
    <Card name="Chuck" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" phone="+918 372 574" mail="gmail@chucknorris.com"/>
    <input id="fName"/>

  
  </div>,
  document.getElementById("root")
);
