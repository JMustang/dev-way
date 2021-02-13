import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import { Button, Link } from "@material-ui/core";
//import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    //   display: "flex",
    //   flexDirection: "row",
    height: "100vh",
  },
  image: {
    background: theme.palette.primary.main,
    backgroundImage: "url(/images/background.svg)",
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
    backgroundRepeat: "none",
    padding: theme.spacing(2),
    textAlign: "center",
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(2, 4),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright ©"}{" "}
      <a color="inherit" href="https://github.com/JMustang">
        Junior Carvalho.
      </a>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

function SignIn() {
  const classes = useStyles();
  //const navigate = useNavigate();

  async function handleSignIn() {
    // aqui faz a chamada a api
    // se retorno ok, direciona para home page
    // senao exibe mensagem para o usuario
    // axios.post("/api/home/login")
    // .then((response) => console.log(response));
    const response = await axios.post("/api/home/login");
    console.log(response);
  }

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        direction="column"
        //justify="center"
        alignItems="center"
        md={7}
        className={classes.image}
      >
        <Typography
          style={{
            color: "#000",
            fontSize: 35,
            marginTop: "4rem",
            lineHeight: "45px",
          }}
        >
          <strong>Aprenda a programar de um jeito facil.</strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "#000",
            marginTop: 20,
            fontSize: 15,
            lineHeight: "30px",
          }}
        >
          Aprenda com desafios e prática.
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Acesso</Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSignIn}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                <Link>Esqueceu a senha? </Link>
              </Grid>
              <Grid item>
                <Link> Não tem uma conta? Registre-se!</Link>
              </Grid>
            </Grid>
          </form>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;
