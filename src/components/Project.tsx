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

function Project() {
  const classes = useStyles();

  return (
    <Container className={classes.experience}>
      <Typography variant="h3" className={classes.title}>Project</Typography>
    </Container>
  );
}

export default Project;