import {Avatar, Typography, Container, Grid} from '@mui/material';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles({
  title: {
    paddingTop: "30vh"
  },
  icon: {
    padding: 10
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
      <Typography>UBC CS Year 4</Typography>
      <GitHubIcon sx={{ fontSize: 60 }} onClick={() => window.open("https://github.com/JakeMoh")} className={classes.icon} />
      <LinkedInIcon sx={{ fontSize: 60 }} onClick={() => window.open("https://www.linkedin.com/in/jake-moh-1a48a2193/")} className={classes.icon} />
    </Container>
  );
}

export default Title;