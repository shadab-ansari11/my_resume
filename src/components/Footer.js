import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    backgroundColor: "rgb(16 29 26)",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#fff",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

function Footer () {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="mailto:shadab.ansari.web11@gmail.com?subject=&body!">
      <BottomNavigationAction icon={<EmailIcon />} className={classes.root} />
      </a>
      <a  href="https://WWW.linkedin.com/in/shadab-ansari-361a23216" target="blank">
      <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} />  
      </a>
      

      <a href="https://instagram.com/Shadab____11" target="blank">
      <BottomNavigationAction icon={<Instagram />} className={classes.root} />
      </a>
    </BottomNavigation>
  );
};
export default Footer;
