import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Image from '../images/PicsArt_08-23-01.50.52.jpg';

const useStyles = makeStyles((theme) => ({
  Image: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "#fff",
    // textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

function Header () {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.Image} src={Image} alt="Shadab Ansari" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Shadab Ansari"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "React js And React Native",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
