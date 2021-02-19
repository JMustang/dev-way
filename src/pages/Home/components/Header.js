import React from "react";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Bell, GitHub, Linkedin } from "react-feather";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  img: {
    maxHeight: 60,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    borderRadius: 4,
    color: "#000",
    background: "#2196f3",
    marginRight: 25,
  },
  bell: {
    marginRight: 25,
  },
  Linkedin: {
    marginRight: 25,
  },
  GitHub: {
    marginRight: 25,
  },
  appbar: {
    background: "#DBDCDE",
  },
});

function Header() {
  const classes = useStyles();

  const user = useSelector((state) => state.user);

  return (
    <AppBar position="fixed" color="inherit" className={classes.appbar}>
      <Toolbar>
        <img src="/images/logo.png" alt="logo" className={classes.img} />
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button variant="outlined" color="primary" className={classes.button}>
            Novo Post
          </Button>
          <SvgIcon className={classes.Linkedin}>
            <Linkedin></Linkedin>
          </SvgIcon>
          <SvgIcon className={classes.GitHub}>
            <GitHub></GitHub>
          </SvgIcon>
          <SvgIcon className={classes.bell}>
            <Bell></Bell>
          </SvgIcon>
          <Avatar alt="Remy Sharp" src={user && user.avatar} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
