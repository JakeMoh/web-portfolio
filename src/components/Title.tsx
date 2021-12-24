import {Avatar, Typography, Container, Grid, IconButton} from '@mui/material';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles({
  title: {
    paddingTop: "vh",
    paddingBottom: "8vh",
    background: "#21242B"
  },
  titleText: {
    paddingBottom: "10vh"
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5vh"
  }
})


function Title() {
  const classes = useStyles();
  const width = window.innerWidth;

  return (
    <Grid container className={classes.title}>
      <Grid sm={6} xs={12} className={classes.center}>
        <Container className={classes.titleText}>
          <Typography variant="h1">Jake Moh</Typography>
          <Typography variant="h4">Software Developer</Typography>
          <IconButton onClick={() => window.open("https://github.com/JakeMoh")}>
            <GitHubIcon sx={{ fontSize: 50 }}/>
          </IconButton>
          <IconButton onClick={() => window.open("https://www.linkedin.com/in/jake-moh-1a48a2193/")}>
            <LinkedInIcon sx={{ fontSize: 50 }}/>
          </IconButton>
        </Container>
      </Grid>
      <Grid item sm={6} xs={12} className={classes.center}>
        <Avatar alt="Jake Moh Profile" src={`${process.env.PUBLIC_URL}/profile.jpg`} sx={{width: "80vh", height: "auto", maxWidth: "100%"}}/>
      </Grid>
    </Grid>
  );
}

export default Title;