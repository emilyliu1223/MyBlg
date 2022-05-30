import React from 'react'
import "../App.css"
import me from  "../data/me.jpg"
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import github from "../data/github.svg"
import linkdin from "../data/linkedin.svg"
import gmail from "../data/gmail.svg"
import { urlencoded } from 'body-parser';
const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 4px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: "0",
        left: "0",
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(2.2)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(1.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  const useStyles = makeStyles((theme) => ({
    root: {
      display:"flex",
      '& > *': {
        margin: "auto",
        marginTop:"50px"
       
      },
    },
  }));
function Intro() {
    const classes = useStyles();
    return (
        <div>
            
            <div className={classes.root}>

<StyledBadge
  overlap="circle"
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
  variant="dot"
> 
  <Avatar style={{height:"200px",width:"200px",marginLeft:"5px",marginBottom:"0px"}}alt="Remy Sharp" src={me} />
</StyledBadge>
    

            </div>
           
            <div className="name-div">
     <p style={{color:"white",paddingTop:"20px"}}>Ting-Yu, Liu</p>
     </div>
            <div className="link">
           
            <div className="link-div">
        <a href="https://github.com/emilyliu1223"><img src={github} style={{width:"30px"}}alt=""/></a>
       <a href="https://www.linkedin.com/in/tingyu-liu-25728a185/"> <img src={linkdin} style={{width:"30px"}}alt=""/></a>
        <a href={"mailto:" + "emilyjujmjjujmj0@gmail.com"}><img src={gmail} style={{width:"30px"}}alt=""/></a>
    </div>
            </div>
    <div className="content-div">
    <div style={{listStyleType:"none"}}>
            <div>Greetings! I am Tingyu, you can call me Emily. My expertise 
              is full-stack software development. I have a master degree in Information Systems and 2 years of 
              professional experience. Feel free to browse my repositories and leave me a message via email!
              </div>       
        </div>
    </div>
        
     
    </div>
        
    )
}

export default Intro
