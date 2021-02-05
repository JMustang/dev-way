import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#03254c",
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 275,
  },
  button: {
    width: "100%",
  },
}));

const tags = [
  { id: 2, name: "javascript" },
  { id: 6, name: "nodejs" },
  { id: 1, name: "reactjs" },
  { id: 3, name: "nextjs" },
  { id: 4, name: "react native" },
  { id: 5, name: "flutter" },
];

// const useStyles = makeStyles({
//   root: {
//     background: "red",
//     padding: 16,
//     width: 275,
//   },
// });

function NavBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Registre-se
      </Button>
      <ListSubheader>{"Tags em alta"}</ListSubheader>
      {tags.map((item) => (
        <ListItem dense button key={`item-${item.id}-${item.name}`}>
          <ListItemText primary={`#${item.name}`} />
        </ListItem>
      ))}
      <ListItem button>Exibir mais tags</ListItem>
    </Paper>
  );
}

export default NavBar;
