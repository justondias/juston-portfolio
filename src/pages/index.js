import React from "react";
//import pic from "./wave.jpg";
import Img from "gatsby-image";

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



export default ({ data }) => {
  console.log(data);
  return(  
  <div>
    
    <div {...flex}>
      <Img {...profImg} resolutions={data.profileImage.resolutions} />
    </div>
    <h1>Hi, my name is Juston!</h1>
    <p>
      I am a full-stack web developer currently located in Delray Beach, FL. 
      In 2016, I graduated from Florida Institite of Technology with a B.S. in computer engineering.
      I have a passion for creating lightning-fast, responsive and scalable web solutions. 
    </p>

  </div>
  );
};

export const pageQuery = graphql`
query HeaderImageQuery {
  profileImage: imageSharp(id: { regex: "/profilePic/" }) {
    resolutions(width: 250, height: 250) {
      ...GatsbyImageSharpResolutions_tracedSVG
    } 
  }
}
`;
