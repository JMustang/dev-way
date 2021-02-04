import React from "react";
import { Button } from "@material-ui/core";

function Header() {
  return (
    <header className="header">
      <div className="toolbar">
        <div>
          <span>The dev way</span>
          <input type="text"></input>
        </div>
        <div>
          <Button variant="contained" color="primary" disableElevation>
            Novo Post
          </Button>
          <span>img1</span>
          <span>img2</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
