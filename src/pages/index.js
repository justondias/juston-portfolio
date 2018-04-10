import React from "react";
import pic from "./wave.jpg";

import { css } from 'glamor'


let flex = css({
  display: 'flex',
  justifyContent: 'center',
  width:'100%', 
})

let profImg = css({
  borderRadius: '50%',
  height:250,
  width: 250,
  margin: '0 auto',
})


const ProfileImg = props =>
  <div {...flex}>
        <img src={props.src} {...profImg} />
  </div>


export default () => (
  <div>
    <ProfileImg src={pic}></ProfileImg>
    <h1>Hi! My name is Juston!</h1>
    <p>
      I am a full-stack web developer currently located in Boca Raton, FL. 
      In 2016 I graduated from Florida Institite of Technology with a B.S. in computer engineering.
      I have a passion for creating lightning-fast, responsive and scalable web solutions. 
    </p>

  </div>
);