import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140,
  },
  title:{
      borderBottom:"1px solid gray",
      color:"#596e79",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight:"bold"
  },
  context:{
      marginTop:"10px"
  },
  name:{
      color:"#c7b198",
      border:"1px solid #dfd3c3"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography className={classes.context}variant="body2" color="textSecondary" component="p">
            <div>
                {props.skill.map(
                    item=><div className={classes.name}style={{display:"inline",margin:"3px",padding:"3px"}}><label>{item}</label></div>
                )}
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}