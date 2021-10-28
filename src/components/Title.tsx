import {Avatar, Typography, Container, Grid} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  title: {
    paddingTop: "30vh"
  }
})

function Title() {
  const classes = useStyles();

  return (
    <Container className={classes.title}>
      <Grid container alignItems="center" direction="column">
        <Avatar alt="Jake Moh" src={`${process.env.PUBLIC_URL}/jakemoh.jpg`} sx={{ width: 100, height: 100 }}/>
      </Grid>
      <Typography variant="h1">Jake Moh</Typography>
      <Typography>Personal Web Portfolio</Typography>
      <Typography>UBC CS Year 4</Typography>
    </Container>
  );
}

export default Title;