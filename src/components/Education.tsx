import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Typography, Avatar, Container, Grid, Link, Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, List, ListItem, ListItemText } from '@mui/material';

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
  const [openUBC, setOpenUBC] = useState(false);

  const handleClickOpenUBC = () => {
    setOpenUBC(true);
  };

  const handleCloseUBC = () => {
    setOpenUBC(false);
  };

  return (
    <Container className={classes.education}>
      <Typography variant="h3" className={classes.title}>Education</Typography>
      <Grid container className={classes.card}>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Avatar alt="UBC" src={`${process.env.PUBLIC_URL}/UBC.jpg`} sx={{width: "40vh", height: "auto", maxWidth: "100%"}}/>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Box>
            <Typography variant="h4">University of British Columbia</Typography>
            <Typography variant="h6">BSc Computer Science (2018 - 2022)</Typography>
            <br/>
            <Button onClick={handleClickOpenUBC}>Learn more {'>'}</Button>
            <UBCDialog
              open={openUBC}
              onClose={handleCloseUBC}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container className={classes.card}>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Box>
            <Typography variant="h4">University of Toronto</Typography>
            <Typography variant="h6">BSc Animal Physiology & Human Biology (2012 - 2017)</Typography>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Avatar alt="UofT" src={`${process.env.PUBLIC_URL}/UofT.jpg`} sx={{width: "40vh", height: "auto", maxWidth: "100%"}}/>
        </Grid>
      </Grid>
    </Container>
  );
}

function UBCDialog(props: any) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>UBC</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <List>
            <ListItem>
              <ListItemText>Computer science courses average: 3.84 / 4</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Courses: Software Construction, Algorithms and Data Structures, Introduction to Computer Systems, Computer Hardware and Operating Systems, Introduction to Relational Databases, Internet Computing, Machine Learning and Data Mining, Advanced Software Engineering, Numerical Approximation and Discretization</ListItemText>
            </ListItem>
          </List>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default Education;