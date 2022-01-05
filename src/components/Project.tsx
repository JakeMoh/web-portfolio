import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Typography, Button, Container, Grid, Card, CardMedia, CardContent, CardActions, Link, Dialog, DialogTitle, DialogContent, DialogContentText, List, ListItem, ListItemText} from '@mui/material';


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
  const [openConnectFive, setOpenConnectFive] = useState(false);

  const handleClickOpenConnectFive = () => {
    setOpenConnectFive(true);
  };

  const handleCloseConnectFive = () => {
    setOpenConnectFive(false);
  };

  return (
    <Container className={classes.project}>
      <Typography variant="h3" className={classes.title}>Project</Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="/game/connectFive.jpg"
              alt="sample"
            />
            <CardContent>
              <Typography gutterBottom variant="h4">
                Connect Five
              </Typography>
              <Typography variant="body2">
                Two player game: Connect five dots to win the game.
              </Typography>
              <Button onClick={handleClickOpenConnectFive}>Learn more {'>'}</Button>
              <ConnectFiveDialog
                open={openConnectFive}
                onClose={handleCloseConnectFive}
              />
            </CardContent>
            <CardActions className={classes.button}>
              <Button href="/#/connectfive" variant="contained">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus.
              </Typography>
              <Link underline="hover" variant="body1">Learn more {'>'}</Link>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus.
              </Typography>
              <Link underline="hover" variant="body1">Learn more {'>'}</Link>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas auctor finibus.
              </Typography>
              <Link underline="hover" variant="body1">Learn more {'>'}</Link>
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

function ConnectFiveDialog(props: any) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Connect Five</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <List>
            <ListItem>
              <ListItemText>Inspired by Tic-tac-toe of React tutorial.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Used material design to generate boxes and buttons.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Korean two player game.</ListItemText>
            </ListItem>
          </List>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default Project;