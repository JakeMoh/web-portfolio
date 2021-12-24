import { Typography, Avatar, Container, Grid, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  education: {
    marginTop: "20vh",
    marginBottom: "20vh"
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
    padding: "5vh"
  },
  title: {
    paddingBottom: "5vh"
  }
})

function Education() {
  const classes = useStyles();

  return (
    <Container className={classes.education}>
      <Typography variant="h3" className={classes.title}>Education</Typography>
      <Grid container className={classes.card}>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Avatar alt="UBC" src={`${process.env.PUBLIC_URL}/UBC.jpg`} sx={{width: "40vh", height: "auto", maxWidth: "100%"}}/>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Container>
            <Typography variant="h4">University of British Columbia</Typography>
            <Typography variant="h6">BSc Computer Science (2018 - 2022)</Typography>
            <br/>
            <Link href="#" underline="hover" variant="body1">Learn more {'>'}</Link>
          </Container>
        </Grid>
      </Grid>
      <Grid container className={classes.card}>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Container>
            <Typography variant="h4">University of Toronto</Typography>
            <Typography variant="h6">BSc Animal Physiology & Human Biology (2012 - 2017)</Typography>
            <br/>
            <Link href="#" underline="hover" variant="body1">Learn more {'>'}</Link>
          </Container>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Avatar alt="UofT" src={`${process.env.PUBLIC_URL}/UofT.jpg`} sx={{width: "40vh", height: "auto", maxWidth: "100%"}}/>
        </Grid>
      </Grid>
    </Container>
    // <Container className={classes.education}>
    //   <Typography variant="h3" className={classes.title}>Education</Typography>
    //   <Grid container alignItems="center" justifyContent="center" direction="column" spacing={4}>
    //     <Grid item>
    //       <Avatar alt="AWS" src={`${process.env.PUBLIC_URL}/UBC.jpg`} sx={{ width: 80, height: 80 }}/>
    //     </Grid>
    //     <Grid item>
    //       <Typography variant="h4">
    //         University of British Columbia
    //       </Typography>
    //       <Typography>
    //         BSc Computer Science
    //         (2018 - 2022)
    //       </Typography>
    //     </Grid>
    //     <Grid item>
    //       <Avatar alt="SAP" src={`${process.env.PUBLIC_URL}/UofT.jpg`} sx={{ width: 80, height: 80 }}/>
    //     </Grid>
    //     <Grid item>
    //     <Typography variant="h4">
    //         University of Toronto
    //       </Typography>
    //       <Typography>
    //         BSc Animal Physiology & Human Biology
    //         (2012 - 2017)
    //       </Typography>
    //     </Grid>
    //   </Grid>
    // </Container>
  );
}

export default Education;