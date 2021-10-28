import { Typography, Avatar, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  experience: {
    paddingTop: 500
  },
  title: {
    paddingBottom: 100
  }
})

function Education() {
  const classes = useStyles();

  return (
    <Container className={classes.experience}>
      <Typography variant="h3" className={classes.title}>Education</Typography>
    </Container>
  );
}

export default Education;