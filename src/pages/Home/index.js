import React from "react";
import "./styles.css";

function Home() {
  return (
    <div>
      <header className="header">
        <div className="toolbar">
          <div>
            <span>The dev way</span>
          </div>
          <div>
            <button>Novo Post</button>
            <span>img1</span>
            <span>img2</span>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="navbar">navbar</div>
        <div className="feed">feed</div>
      </main>
    </div>
  );
}

export default Home;
