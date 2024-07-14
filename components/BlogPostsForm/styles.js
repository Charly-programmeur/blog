import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.paper,
    // Ajoutez d'autres styles de couleur, de typographie selon votre thème
  },
  chooseFile: {
    width: "95%",
    margin: "10px 0",
  },
  publishButton: {
    marginBottom: 10,
    // Ajoutez des styles de couleur, de typographie selon votre thème
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    // Assurez-vous que votre formulaire est réactif ici
    [theme.breakpoints.down("sm")]: {
      // Styles pour les tailles d'écran plus petites (mobile par exemple)
    },
  },
}));
