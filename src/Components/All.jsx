import React from 'react'
import "../App.css"
import { makeStyles } from '@material-ui/core/styles';
import Project from "./Project"
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Education from "./Education"
import ig from "../data/ig.png"
import msg from "../data/msg.png"
import resort from "../data/resort.png"
import twogirls from "../data/twoGirls_presentation.mp4"
import recipe from "../data/recipe.png"
import covid from "../data/covid.png"
import ecommerce from "../data/ecommerce.png"

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(5),
    backgroundColor:"white"
  },
  svg: {
    width: 900,
    height: 150,
    color:"#16213e",
    fontWeight:"bold"
    
  },
  
}));

function All() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
  
    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    return (
        <div className="all-div">
    <div className={classes.root}>
      <div className={classes.container}>
        <Fade in="true">
          <Paper elevation={4} className={classes.paper} component="div">
              <div className={classes.svg}>
                 <div style={{margin:"20px", fontFamily: "'Montserrat', sans-serif"}}>
                     Hi, welcome to my blog! My name is TingYu, Liu. I am an entry level software Developer. 
                     I am currently searching for an opportunity to join a company to help increase the productivity and learn to build real world applications.
                     I know this may sound a little cliche, but I do have passion to develop websites!
                     Sometimes it could be a little challenging to debug and figure out complex structure. 
                     But I like challenges! I am a good team player, I believe team work has the magic to enpower individually. 
                     Please don't hesitate to contact me if you think I could potentially be a good fit to your position.
                 </div>
              </div>
            
          </Paper>
        </Fade>
      </div>
    </div>
    <div className="education-div" id="education">
     <Education />
     
    </div>
    <div class="container project-div" id="project">
  
  <div class="row justify-content-center">
    <div class="col-6">
    <Project link="https://shopssss.herokuapp.com/"img={ecommerce} title="Ecommerce" sub="Basic ecommerce enabling manage and purchase"
     desc="A fully functioning ecommerce app with admin portal and user portal.
     (Implementing paypal sandbox.)
     Build up with Node.js and React.js (Redux), hosting on cloud."
     detail={["Created in VSCode it is a responsive, dynamic and real time web utilizing Bootstrap and Material-UI.  React library to build a front end.   Redux to manage complex states. Node and Express framework to run API and server.MongoDB and Mongoose to manipulate data operations and host it on Azure."
     ,"Functionality: Signing, Signup, Logout form, Cart, Checkout with personal details (Pay pal API sandbox), Admin pages including CRUD products and orders, Profile update"]}
    />
    </div>
    <div class="col-6">
    <Project img={covid}link="https://github.com/emilyliu1223/Covid-19-Tracing-App" title="Covid-19 Tracing System" 
    sub="An application managing population and disease in a scale of U.S"
    desc="Bigger project and was chosen to be the best project out of 30 pieces by professor"
    detail={["Simulating a covid-19 tracking application that allows population, hospital, CDC, police force in a national scale (U.S) in different area to control, document, diagnose and trace down covid-19 cases individually. Developed in Netbeans, front end using swing UI, backend using Java, embedded OpenCV 3.0 camera and google map.",
    "A fairly large projects that including 51 states, 4 enterprises, 9 organizations and roles. A total of over 10,000 lines of code."]}/>
    </div>
    <div class="col-6">
    <Project img={ig} link="https://react-instagram-c11f1.web.app/" title="Social Media" sub="Duplicate a simple IG"
    desc="A simplified IG cloned with basic user functionality hosting data on cloud"
    detail={["Implementing a simplified real-time Instagram. Front end using React, backend, database and deploy using firebase.",
    "Functionality: Login, signup portal, post with progress bar and image upload, commenting with a name. Instagram embedded."]}/>
    </div>
    <div className="col-6">
  <Project img={recipe} title="Recipe API" sub="Edame recipe API"
    desc="A recipe website fetching recipe API from Edame"
    detail={[]} />

  </div>
  
  <div className="col-6">
  <Project img={resort} link="https://ting-resort.netlify.app/" title="Resort"sub="A simplied hotel website"
    desc="navigating data with context API, hosting data on Contentful"
    detail={[]}
    />
  </div>
  <div className="col-6">
  <Project img={msg} link="https://messenger-8f285.web.app/" title="Chat Room" sub=""
    desc="A implementation of messenger, hosting with firebase"
    detail={[]}/>
  </div>
  </div>
</div>
  </div>
  
     
     
    )
}

export default All
