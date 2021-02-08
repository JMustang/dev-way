import React from "react";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Bell, GitHub, Linkedin } from "react-feather";
import Avatar from "@material-ui/core/Avatar";

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
    color: "#000",
    background: "linear-gradient(to bottom left, #33ccff 0%, #cc66ff 64%)",
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
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <img src="/images/logo.png" alt="logo" className={classes.img} />
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
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
          <Avatar alt="Remy Sharp" src="" />
        </div>
        {/* <div>
          <a href="/">The dev way</a>
          <input type="text"></input>
        </div>
        <div>
          <Button variant="contained" color="secondary">
            Novo Post
          </Button>
          <span>img1</span>
          <span>img2</span>
        </div> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
