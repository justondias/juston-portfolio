import React from "react";
import giticon from "./git.svg";
import instaicon from "./insta.svg";
import linkicon from "./link.svg";
import headerIcon from "./jdk.svg";

import Headroom from "react-headroom";
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

let padding_global= css({
  padding: `1.25rem 1rem`, 
  maxWidth: 650, 
  margin:'0 auto'
})

let headerIconStyle= css({
  paddingTop:5,
  width: 45, 
  height:45,
  margin:0,
  transition: 'all 200ms ease-in',
  ':hover': {
    transition: 'all 200ms ease-in',
    transform: 'scale(1.2)',
  } 
})

let headerLink= css({

  padding: 21,
 
  background:'lightblue',


  ':hover': {
    background:'gray'  
  } 
})

const ListLink = props =>
  <li style={{display:"inline-block",float:"right",listStyle:'none',margin:0, height:60,paddingTop:13 }}>
    <Link exact activeStyle={{ color:'black',background:'darkgray'}} style={{textShadow:'none', color:'black'}} to={props.to} {...headerLink}>
      {props.children}
    </Link>
  </li>

export default ({ children}) => 
 <div >
     <Headroom style={{backgroundColor:'lightblue',position: 'fixed', zIndex: 10, right: 0, left: 0, top: 0,height:64}} >
     
          <header style={{  padding: `0.25rem 1rem`, maxWidth: 650, margin:'0 auto'}}>
            
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`,color:'black',fontWeight:'bold',textShadow:'none' }}>
            <img src={headerIcon} {...headerIconStyle}/>
            </Link>
            
              <ListLink to="/projects/" >Projects</ListLink>
              <ListLink to="/" >Home</ListLink>
              
     
           
          </header>
       
  </Headroom>
  
      <div style={{minHeight:'75vh'}} {...padding_global}>  
          {children()}
          
      </div>
      
      <div>
        <footer style={{ backgroundColor:"lightblue",  textAlign:'center', height:'300px', padding:'1rem 0'}}> 
            
           <h3>Contact Me</h3>
      
              <p>juston706@gmail.com</p>              
              <div {...social_media_container}>
                  <a {...social_media_icon_container}
                   href="https://www.linkedin.com/in/juston-dias-bb1857138/" target="_blank">
                    <img className="social_media_icon" src={linkicon} alt="icon" />
                  </a>
                  <a {...social_media_icon_container}
                   href="https://github.com/justondias" target="_blank">
                    <img className="social_media_icon" src={giticon} alt="icon"/>
                  </a>
                  <a {...social_media_icon_container}
                     href="https://www.instagram.com/justondias/" target="_blank">
                    <img className="social_media_icon" src={instaicon} alt="icon" />
                  </a>
              </div>
        
        </footer>
    </div>
 </div>
 




