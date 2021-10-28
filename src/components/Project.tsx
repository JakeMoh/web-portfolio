import { Typography, Button, Container, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  experience: {
    paddingTop: 500
  },
  title: {
    paddingBottom: 100
  },
  justifyContent: {
    display: "flex",
    justifyContent: "flex-end"
  },
  rightAlignItem: {
    marginLeft: "auto"
  }
})

function Project() {
  const classes = useStyles();

  return (
    <Container className={classes.experience}>
      <Typography variant="h3" className={classes.title}>Project</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/jakemoh.jpg"
              alt="sample"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Game 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Typography>
            </CardContent>
            <CardActions className={classes.justifyContent}>
              <Button variant="contained" size="medium" className={classes.rightAlignItem}>Play</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/jakemoh.jpg"
              alt="sample"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Game 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Typography>
            </CardContent>
            <CardActions className={classes.justifyContent}>
              <Button variant="contained" size="medium" className={classes.rightAlignItem}>Play</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/jakemoh.jpg"
              alt="sample"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Game 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Typography>
            </CardContent>
            <CardActions className={classes.justifyContent}>
              <Button variant="contained" size="medium" className={classes.rightAlignItem}>Play</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/jakemoh.jpg"
              alt="sample"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Game 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Typography>
            </CardContent>
            <CardActions className={classes.justifyContent}>
              <Button variant="contained" size="medium" className={classes.rightAlignItem}>Play</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/jakemoh.jpg"
              alt="sample"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Game 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Typography>
            </CardContent>
            <CardActions className={classes.justifyContent}>
              <Button variant="contained" size="medium" className={classes.rightAlignItem}>Play</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="/jakemoh.jpg"
              alt="sample"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Game 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Typography>
            </CardContent>
            <CardActions className={classes.justifyContent}>
              <Button variant="contained" size="medium" className={classes.rightAlignItem}>Play</Button>
            </CardActions>
          </Card>
        </Grid>
        
      </Grid>

      
    </Container>
  );
}

export default Project;