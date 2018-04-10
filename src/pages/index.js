import React from "react";
import pic from "./wave.jpg";

import { css } from 'glamor'

let flex = css({
  display: 'flex',
  justifyContent: 'center',
  width:'100%', 
})



export default () => (
  <div>
                        <div {...flex}>
                          <img className="profileimg" src={pic} 
                                    css={{
                                        borderRadius: '50%',
                                        height:250,
                                        width: 250,
                                        margin: '0 auto',
                                      }} />
                        </div>
    <h1>Hi! My name is Juston!</h1>
    <p>
      I am a full-stack web developer currently located in Boca Raton, FL. 
      In 2016 I graduated from Florida Institite of Technology with a B.S. in computer engineering.
      I have a passion for creating lightning-fast, responsive and scalable web solutions. 
    </p>
    <p>

    </p>
  </div>
);