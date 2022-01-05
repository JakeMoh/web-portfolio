import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Typography, Avatar, Container, Grid, Link, Box, Dialog, DialogTitle, DialogContent, DialogContentText, Button, List, ListItem, ListItemText} from '@mui/material';

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
    padding: "2vh"
  },
  title: {
    paddingBottom: "5vh"
  }
})

function Experience() {
  const classes = useStyles();
  const [openAWS, setOpenAWS] = useState(false);
  const [openSAP, setOpenSAP] = useState(false);
  const [openVCL, setOpenVCL] = useState(false);

  const handleClickOpenAWS = () => {
    setOpenAWS(true);
  };

  const handleCloseAWS = () => {
    setOpenAWS(false);
  };

  const handleClickOpenSAP = () => {
    setOpenSAP(true);
  };

  const handleCloseSAP = () => {
    setOpenSAP(false);
  };

  const handleClickOpenVCL = () => {
    setOpenVCL(true);
  };

  const handleCloseVCL = () => {
    setOpenVCL(false);
  };

  return (
    <Container className={classes.experience}>
      <Typography variant="h3" className={classes.title}>Experience</Typography>
      <Grid container className={classes.card}>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Avatar alt="awd" src={`${process.env.PUBLIC_URL}/aws.jpg`} sx={{width: "40vh", height: "auto", maxWidth: "100%"}}/>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Box>
            <Typography variant="h4">Software Developer Intern</Typography>
            <Typography variant="h6">RDS Proxy</Typography>
            <Typography variant="body1">May - Aug 2021 (4 month)</Typography>
            <br/>
            <Button onClick={handleClickOpenAWS}>Learn more {'>'}</Button>
            <AWSDialog
              open={openAWS}
              onClose={handleCloseAWS}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container className={classes.card}>
        <Grid item sm={6} xs={12} className={classes.center}>
          <Box>
            <Typography variant="h4">Software Developer Intern</Typography>
            <Typography variant="h6">Infrastructure</Typography>
            <Typography variant="body1">Jan - Aug 2020 (8 month)</Typography>
            <Typography variant="body1">Jan - Apr 2021 (4 month)</Typography>
            <br/>
            <Button onClick={handleClickOpenSAP}>Learn more {'>'}</Button>
            <SAPDialog
              open={openSAP}
              onClose={handleCloseSAP}
            />
          </Box>
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
          <Box>
          <Typography variant="h4">Lead Software Developer</Typography>
            <Typography variant="h6">UBC Visual Cognition Lab</Typography>
            <Typography variant="body1">Apr 2019 - Present (2 year 10 month+)</Typography>
            <br/>
            <Button onClick={handleClickOpenVCL}>Learn more {'>'}</Button>
            <VCLDialog
              open={openVCL}
              onClose={handleCloseVCL}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

function AWSDialog(props: any) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Migrating CloudWatch Logs to Redshift Database</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <List>
            <ListItem>
              <ListItemText>CloudWatch is used by developers in the team to visualize data and gain insights on logs and metrics. However, CloudWatch loses its resolution over time and has limited analysis capability. My project was to migrate CloudWatch metrics to more reliable storage such as the Redshift database by using automatic deployment.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Key Technologies: AWS services (CloudWatch, Redshift, S3, Lambda Function, IAM, Firehose, CloudFormation, CDK, Subscription Filter), Java</ListItemText>
            </ListItem>
          </List>
        </DialogContentText>
      </DialogContent>
      <DialogTitle>Adding CloudWatch Metric</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <List>
            <ListItem>
              <ListItemText>Added average client connections field in CloudWatch Logs that represents the duration of connections for 1 minutes intervals using Java.</ListItemText>
            </ListItem>
          </List >
        </DialogContentText>
      </DialogContent>
      <DialogContent>
        <DialogContentText>
          Although both projects still require more development, I successfully completed the assigned project and contributed to improving the internal tools used by the developers in the team.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

function SAPDialog(props: any) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Jan - Aug 2020</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <List>
            <ListItem>
              <ListItemText>Implemented Oauth2.0 client credential flow between Kubernetes and Cloud foundry with WebSocket tunneling connection over SSH using Go.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Developed Concourse pipeline that installs highly available and load balanced Docker Registry in Kubernetes, which keeps only latest 10 tags of a repository in the Docker Registry.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Implemented Python script that locates GitHub repositories recursively to find Java files that depends on certain microservices using GitHub’s APIs.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Wrote Go script to create and modifying IP addressed of service key in cloud foundry using APIs.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Key Technologies: Docker, Kubernetes, Cloud Foundry, Concourse, Go, Python</ListItemText>
            </ListItem>
          </List>
        </DialogContentText>
      </DialogContent>
      <DialogTitle>Jan - Apr 2021</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <List>
            <ListItem>
              <ListItemText>Designed and implemented landing page for the documention of the project.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Implemented PostgreSQL tester application that tests the functionality of service broker deployed in Kubernetes.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Developed documentation for setting up CI pipeline to onboard new services to Delphi project using Jenkins as a Service and created interactive flowchart for the required steps.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Key Technologies: Docker, Kubernetes, Cloud Foundry, Jenkins as a Service, Node.js, Git, mkdocs</ListItemText>
            </ListItem>
          </List >
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

function VCLDialog(props: any) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Leadership</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <List>
            <ListItem>
              <ListItemText>Responsible for managing the coding team (~ 10 developers) and leading projects.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Designed on-boarding documentation for newcomers to follow.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Attended weekly meetings and assign tasks to developers based on the needs of the researchers.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Conducted interviews to select developers.</ListItemText>
            </ListItem>
          </List>
        </DialogContentText>
      </DialogContent>
      <DialogTitle>Technical</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <List>
            <ListItem>
              <ListItemText>Designed and deployed local experiment web application online using Heroku, Firebase, Prolific, JavaScript, and Node.js as a response to the physical restriction policies during the COVID-19 pandemic.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Developed a feature that allows resolution to be scaled so that graphs are presented in fixed physical length across all experiments and monitors. Implemented frontend for laptop model selection and card scaling feature used to retrieve pixel per inch of the user’s monitor.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Refactored the existing experiment web application by applying Encapsulation and Abstraction OOP principles.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Assisted researchers and developers debug and enhance their research experiment.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Created documentation explaining the architecture and design of the experiment web application.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Implemented new experiments.</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Key technologies: JavaScript, Node.js, API, D3, JsPsych, Heroku, Firebase, Prolific, bootstrap, HTML, CSS, Git</ListItemText>
            </ListItem>
          </List >
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default Experience;