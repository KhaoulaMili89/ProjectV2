import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function CoursesCard({course}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {course.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {course.Description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {course.Content}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          By {course.owner.firstname}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          Modify
        </Button>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
                </Button>
        
        
      </CardActions>
    </Card>
  );
}




