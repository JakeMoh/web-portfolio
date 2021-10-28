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

function Experience() {
  const classes = useStyles();

  return (
    <Container className={classes.experience}>
      <Typography variant="h3" className={classes.title}>Experience</Typography>
      <Grid container alignItems="center" justifyContent="center" direction="column" spacing={4}>
        <Grid item>
          <Avatar alt="AWS" src={`${process.env.PUBLIC_URL}/aws.jpg`} sx={{ width: 80, height: 80 }}/>
        </Grid>
        <Grid item>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum, lectus at lacinia consectetur, nisl magna porta neque, nec tempor lectus est sed turpis. Curabitur nec pretium arcu. Sed a lorem est. Pellentesque faucibus, lectus eu ultricies elementum, erat metus gravida erat, sed commodo enim metus vitae nibh. Pellentesque id lacinia elit. Fusce vitae tellus non ligula sodales convallis vel vitae urna.</Typography>
        </Grid>
        <Grid item>
          <Avatar alt="SAP" src={`${process.env.PUBLIC_URL}/SAP.jpg`} sx={{ width: 80, height: 80 }}/>
        </Grid>
        <Grid item>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum, lectus at lacinia consectetur, nisl magna porta neque, nec tempor lectus est sed turpis. Curabitur nec pretium arcu. Sed a lorem est. Pellentesque faucibus, lectus eu ultricies elementum, erat metus gravida erat, sed commodo enim metus vitae nibh. Pellentesque id lacinia elit. Fusce vitae tellus non ligula sodales convallis vel vitae urna.</Typography>
        </Grid>
        <Grid item>
          <Avatar alt="VCL" src={`${process.env.PUBLIC_URL}/VCL.jpg`} sx={{ width: 80, height: 80 }}/>
        </Grid>
        <Grid item>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum bibendum, lectus at lacinia consectetur, nisl magna porta neque, nec tempor lectus est sed turpis. Curabitur nec pretium arcu. Sed a lorem est. Pellentesque faucibus, lectus eu ultricies elementum, erat metus gravida erat, sed commodo enim metus vitae nibh. Pellentesque id lacinia elit. Fusce vitae tellus non ligula sodales convallis vel vitae urna.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Experience;