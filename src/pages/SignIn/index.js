import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  left: {
    background: "red",
    flexBasis: "58%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    background: "green",
    flexBasis: "42%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "64px 32px",
    alignItems: "center",
  },
}));

function SignIn() {
  const classes = useStyles();

  return (
    /* flex conteiner */
    <div className={classes.root}>
      {/* flex item conteiner*/}
      <div className={classes.left}>
        <Typography style={{ color: "#fff", fontSize: 35, lineHeight: "45px" }}>
          <strong>Aprenda a programar de um jeito facil.</strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "rgb(255,255,255, 0.7)",
            marginTop: 30,
            fontSize: 15,
            lineHeight: "30px",
          }}
        >
          Aprenda com desafios e prática.
        </Typography>
      </div>

      {/* flex item */}
      <div className={classes.right}>
        <form className={classes.form}>
          <h4>Acesso</h4>
          <input type="text" />
          <input type="password" />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
