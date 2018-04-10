import React from "react";
import giticon from "./git.svg";
import instaicon from "./insta.svg";
import linkicon from "./link.svg";



import Link from "gatsby-link";
import { css } from 'glamor'

let social_media_icon_container = css({
  display:'inline-block',
  border:0,
  backgroundColor: 'lightblue',
  width:50,
  height:50,
  position: 'relative',
  transition: 'all 200ms ease-in',
  ':hover': {
    transition: 'all 200ms ease-in',
    transform: 'scale(1.5)',
  } 
})

let social_media_container = css({
  display: 'flex',
  justifyContent: 'space-around',
  maxWidth: 400,
  margin: '0 auto',
})



const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children, data  }) => 
 <div>
      <div style={{padding: `1.25rem 1rem`, maxWidth: 650, minHeight:'85vh', margin: `0 auto`}}>
          <header style={{ margin:'0 auto'}}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                Juston Dias
            </Link>
            <ul style={{ disply:"inline-block",float:"right" }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/about/">Projects</ListLink>
     
            </ul>
          </header>
          
          
          {children()}
          
      </div>
      
      <div>
        <footer style={{ backgroundColor:"lightblue",  textAlign:'center', height:'300px', padding:'1rem 0'}}> 
            
           <h3>Contact Me!</h3>
      
              <p>juston706@gmail.com</p>              
              <div {...social_media_container}>
                  <a {...social_media_icon_container}
                   href="https://www.linkedin.com/in/juston-dias-bb1857138/" target="_blank">
                    <img className="social_media_icon" src={linkicon} />
                  </a>
                  <a {...social_media_icon_container}
                   href="https://github.com/justondias" target="_blank">
                    <img className="social_media_icon" src={giticon} />
                  </a>
                  <a {...social_media_icon_container}
                     href="https://www.instagram.com/justondias/" target="_blank">
                    <img className="social_media_icon" src={instaicon} />
                  </a>
              </div>
           
        </footer>
    </div>
 </div>
 



 export const query = graphql`
 query LayoutQuery {
   site {
     siteMetadata {
       title
     }
   }
 }
`