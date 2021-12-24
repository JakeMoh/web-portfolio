import { Typography, Button, Container, Grid, Card, CardMedia, CardContent, CardActions, Link} from '@mui/material';
// import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    color: "grey"
  }
})

function Footer() {
  const classes = useStyles();

  return (
    <Container className={classes.footer}>
      <Grid container>
        <Grid item xs={6} sm={5} md={4}>
          <Typography variant="body2" align="left">Copyright © 2021 JakeMoh.com</Typography>
        </Grid>
        <Grid item xs={6} sm={5} md={4}>
          <Typography variant="body2" align="left">jakem5531@gmail.com</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;