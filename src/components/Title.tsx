import {Avatar, Typography, Grid, IconButton, Box} from '@mui/material';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles({
  title: {
    paddingTop: "8vh",
    paddingBottom: "8vh",
    background: "#21242B"
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

  return (
    <Grid container className={classes.title}>
      <Grid item sm={6} xs={12} className={classes.center}>
        <Box>
          <Typography variant="h1">Jake Moh</Typography>
          <Typography variant="h4">Software Developer</Typography>
          <IconButton onClick={() => window.open("https://github.com/JakeMoh")}>
            <GitHubIcon sx={{ fontSize: 50 }}/>
          </IconButton>
          <IconButton onClick={() => window.open("https://www.linkedin.com/in/jake-moh-1a48a2193/")}>
            <LinkedInIcon sx={{ fontSize: 50 }}/>
          </IconButton>
        </Box>
      </Grid>
      <Grid item sm={6} xs={12} className={classes.center}>
        <Avatar alt="Jake Moh Profile" src={`${process.env.PUBLIC_URL}/profile.jpg`} sx={{width: "80vh", height: "auto", maxWidth: "100%"}}/>
      </Grid>
    </Grid>
  );
}

export default Title;