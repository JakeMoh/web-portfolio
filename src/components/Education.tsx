import { Typography, Avatar, Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  education: {
    paddingTop: 500
  },
  title: {
    paddingBottom: 100
  }
})

function Education() {
  const classes = useStyles();

  return (
    <Container className={classes.education}>
      <Typography variant="h3" className={classes.title}>Experience</Typography>
      <Grid container alignItems="center" justifyContent="center" direction="column" spacing={4}>
        <Grid item>
          <Avatar alt="AWS" src={`${process.env.PUBLIC_URL}/UBC.jpg`} sx={{ width: 80, height: 80 }}/>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            University of British Columbia
          </Typography>
          <Typography>
            BSc Computer Science
            (2018 - 2022)
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="SAP" src={`${process.env.PUBLIC_URL}/UofT.jpg`} sx={{ width: 80, height: 80 }}/>
        </Grid>
        <Grid item>
        <Typography variant="h4">
            University of Toronto
          </Typography>
          <Typography>
            BSc Animal Physiology & Human Physiology
            (2012 - 2017)
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Education;