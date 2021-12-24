import { Typography, Avatar, Container, Grid, Link} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  experience: {
    marginTop: "20vh",
    width: "100%"
  },
  card: {
    marginTop: "5vh",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    background: "#21242B"
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: "5vh",
    paddingBottom: "5vh"
  },
  title: {
    paddingBottom: "5vh"
  }
})

function Experience() {
  const classes = useStyles();

  return (
    <Container className={classes.experience}>
      <Typography variant="h3" className={classes.title}>Experience</Typography>
      <Grid container className={classes.card}>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Avatar alt="awd" src={`${process.env.PUBLIC_URL}/aws.jpg`} sx={{width: "40vh", height: "auto", maxWidth: "100%"}}/>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Container>
            <Typography variant="h4">Software Developer Intern</Typography>
            <Typography variant="h6">RDS Proxy</Typography>
            <br/>
            <Link href="#" underline="hover" variant="body1">Learn more {'>'}</Link>
          </Container>
        </Grid>
      </Grid>
      <Grid container className={classes.card}>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Container>
            <Typography variant="h4">Software Developer Intern</Typography>
            <Typography variant="h6">Infrastructure</Typography>
            <br/>
            <Link href="#" underline="hover" variant="body1">Learn more {'>'}</Link>
          </Container>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Avatar alt="SAP" src={`${process.env.PUBLIC_URL}/SAP.jpg`} sx={{width: "40vh", height: "auto", maxWidth: "100%"}}/>
        </Grid>
      </Grid>
      <Grid container className={classes.card}>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Avatar alt="VCL" src={`${process.env.PUBLIC_URL}/VCL.jpg`} sx={{width: "40vh", height: "auto", maxWidth: "100%"}}/>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Container>
          <Typography variant="h4">Lead Software Developer</Typography>
            <Typography variant="h6">UBC Visual Cognition Lab</Typography>
            <br/>
            <Link href="#" underline="hover" variant="body1">Learn more {'>'}</Link>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Experience;