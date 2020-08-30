import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import SchoolIcon from '@material-ui/icons/School';
import Skill from "./Skill"
import background from "../data/background.jpg"
import CheckIcon from '@material-ui/icons/Check';
const useStyles = makeStyles((theme) => ({
    root: {
      height: 180
    },
    container: {
      display: 'flex',
    },
    paper: {
      width:"900px",
      marginLeft:"45px",
      marginTop:"50px",
      fontFamily: "'Montserrat', sans-serif"
    //   backgroundColor:"#16213e"

    },
    svg: {
      width: 900,
      height: 150,
      color:"#16213e",
      fontWeight:"bold"
      
    },
    divider:{
        borderBottom:"1px solid #596e79"
    },
    title:{
        fontWeight:"1000",
        fontSize:"28px",
        marginLeft:"250px",
        marginTop:"0",
        width:"400px",
        color:'#596e79',
        textAlign:"center"
        
    }
    ,list:{
    //    color:"#d3c09a" ,
       color:"#c7b198",
       fontSize:"12px"
    },
    school:{
        color:"#c7b198",
        fontSize:"20px"
    },
    sub:{
        paddingTop:"10px",
        fontSize:"15px"
    },
    date:{
        fontSize:"15px"
    }
    
  }));
function Education() {
    
      const classes = useStyles();
    return (
        <div className={classes.paper} style={{backgroundImage:{background}}}>
        
            <div style={{paddingTop:"20px"}}>
            <p className={classes.title}>Education Background</p>  
           
                <ul className={classes.list} style={{listStyleType:"none"}}>               
                    <li>
                    <strong className={classes.school}>BS of Economics, National Chengchi University</strong>
                    <p className={classes.date}> <p style={{marginTop:"5px"}}>Taipei, Taiwan</p>  <p>Aug/2014 - Jun/2019</p></p>
                    </li>
                  
                    <li>
                    <strong className={classes.school}>MS of Information Systems, Northeastern University</strong>
                 <p className={classes.date}><p style={{marginTop:"5px"}}>MA, US</p><p>Aug/2019 - Jun/2021</p> </p>
                    </li>
                </ul>
            </div>
       
            <div className={classes.divider}></div>
         <div style={{paddingTop:"20px"}}>
         <p className={classes.title}>Skill Set</p>
         
         <div class="container" style={{padding:"0px"}}>
  <div class="row">
    <div class="col" style={{padding:"20px"}}>
     <Skill title="Programming Language" skill={["Java", "Python", "C", "Javascipt"]}/>
    </div>
   
    <div class="col" style={{padding:"20px"}}>
    <Skill title="Cloud Technology" skill={["AWS s3"]}/>
    </div>
    <div class="col-6" style={{padding:"20px"}}>
    <Skill title="Frontend" skill={["React.js","HTML","CSS","Sass","EJS","Redux","ContextAPI","Boostrap","jQuery"]} />
    </div>
     </div>
     <div class="row">
    
    <div className="col" style={{padding:"20px"}}>
    <Skill title="Backend" skill={["Node.js","Express.js","SpringMVC"]}/>
    </div>
    <div className="col" style={{padding:"20px"}}>
    <Skill title="Data Analysis" skill={["Tensorflow","Scikit","Seaborn","Pandas","Numpy"]}/>
    </div>
    <div class="col" style={{padding:"20px"}}>
    <Skill title="Environment" skill={["Unbuntu","Windows"]}/>
    </div>
    
    <div class="col" style={{padding:"20px"}}>
    <Skill title="Deploy" skill={["Netlify","Heroku","Firebase"]}/>
    </div>
    </div>
    <div class="row">
    <div class="col" style={{padding:"20px"}}>
    <Skill title="Database" skill={["Mongodb","Azure","mySQL","oracleSQL","contentful","firebase"]}/>
    </div>
    <div class="col" style={{padding:"20px"}}>
    <Skill title="Frameword" skill={["Netbeans","VScode","Eclipse","Netbeans","IntelliJ","Atom","PyCharm"]}/>
    
   </div>
  </div>
</div>
</div>
<div className={classes.divider}></div>
         <div style={{paddingTop:"20px"}}>
         <p className={classes.title}>Work Experience</p>
           
           
           <ul className={classes.list} style={{listStyleType:"none"}}>               
               
               <strong className={classes.school}>  Cybersecurity Technology Institution of Taiwan </strong>
               <p className={classes.sub}><p style={{display:"inline"}}>Intern</p> <p style={{display:"inline",paddingLeft:"30px"}}>Taipei, Taiwan</p> <p style={{display:"inline",paddingLeft:"30px"}}>Mar 2019 – Aug 2019</p></p>
               <li>
               <CheckIcon /> Developing regulatory procedure systems of developing cybersecure software products by researching multiple global software development life cycle regulations.
               </li>
               <li>
               <CheckIcon /> Scanning code using Parasoft and Matlab on virtual environment.
               </li>
               <li>
                 <CheckIcon /> Developing a cybersecure Login, Logout window of a software product using java in Ubuntu virtual enviroment that is cooperated with Industrial Bureau of Taiwan.
               </li>
            
           </ul>
       
            </div>
            <div className={classes.divider}>
            <div style={{paddingTop:"20px"}}>
            <p className={classes.title}>Project Gallery</p>
            </div>
            </div>
        </div>
    )
}

export default Education
