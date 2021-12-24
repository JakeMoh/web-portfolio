import { Typography, Button, Container, Grid, Card, CardMedia, CardContent, CardActions, Link} from '@mui/material';
// import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  project: {
    marginTop: "20vh"
  },
  title: {
    paddingBottom: "10vh"
  },
  button: {
    justifyContent: 'center'
  }
})

function Project() {
  const classes = useStyles();

  return (
    <Container className={classes.project}>
      <Typography variant="h3" className={classes.title}>Project</Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="/game/game1.jpg"
              alt="sample"
            />
            <CardContent>
              <Typography gutterBottom variant="h4">
                Game 1
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Typography>
              <Link href="#" underline="hover" variant="body1">Learn more {'>'}</Link>
            </CardContent>
            <CardActions className={classes.button}>
              <Button href="/#/game" variant="contained">
                Play
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h4">
                Game 2
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Typography>
              <Link href="#" underline="hover" variant="body1">Learn more {'>'}</Link>
            </CardContent>
            <CardActions className={classes.button}>
              <Button href="/#/game" variant="contained">
                Play
              </Button>
            </CardActions>
            <CardMedia
              component="img"
              height="300"
              image="/game/game2.jpg"
              alt="sample"
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="/game/game3.jpg"
              alt="sample"
            />
            <CardContent>
              <Typography gutterBottom variant="h4">
                Game 3
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Typography>
              <Link href="#" underline="hover" variant="body1">Learn more {'>'}</Link>
            </CardContent>
            <CardActions className={classes.button}>
              <Button href="/#/game" variant="contained">
                Play
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="/game/game4.jpg"
              alt="sample"
            />
            <CardContent>
              <Typography gutterBottom variant="h4">
                Game 4
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Typography>
              <Link href="#" underline="hover" variant="body1">Learn more {'>'}</Link>
            </CardContent>
            <CardActions className={classes.button}>
              <Button href="/#/game" variant="contained">
                Play
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Project;