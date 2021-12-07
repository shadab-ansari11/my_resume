import React,{useRef} from "react";
import emailjs from "emailjs-com";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
// import Image from "../images/PicsArt_11-14-10.27.05.jpg";
import Avatar from "@material-ui/core/Avatar";
import Image from '../images/PicsArt_08-23-01.50.52.jpg';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    // height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    // right: "-27%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
  Image: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
   
  },
})(TextField);

function Contact ()  {
  const form = useRef();
     function sendEmail(e){

      e.preventDefault();

    emailjs.sendForm('service_9jhszz3","template_hzjb9mk', form.current, 'user_ZTS7ahAT2Rzmqj877QdMF')
    console.log("emailjs",emailjs)
    
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      

     };
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <from className="from" onSubmit={sendEmail}>
        <Box component="form" className={classes.form} >
        <Avatar className={classes.Image} src={Image} alt="Shadab Ansari" />
          <Typography variant="h5" className={classes.heading}>
            Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            name="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Email"
            name="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label="Message"
            name="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            value="submit"
            type="submit"
            endIcon={<Send />}
            className={classes.button}
          >
            Contact Me
          </Button>
        </Box>
        </from>
      </Grid>
      
    </Box>
  );
};

export default Contact;
