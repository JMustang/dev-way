import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PostCard from "../../../components/PostCard";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: "junior carvalho",
      username: "junior",
      avatar: "/images/avatars/avatar_1.jpeg",
    },
    title: "Criando um app do zero utilizando react.js",
    date: "April 7, 2020",
    description: "Qual o framework favorito de voces?",
    hashtags: "#dotnet, #javascript, #react.js, #development",
    image: "/images/posts/post9.jpeg",
  },
  {
    id: 2,
    author: {
      id: 1,
      name: "junior carvalho",
      username: "junior",
      avatar: "/images/avatars/avatar_1.jpeg",
    },
    title: "Comparativo entre react.js e vue.js - performance",
    date: "April 2, 2020",
    description:
      "Bootcamp gratuito para passar um pouco do meu conhecimento para voces.",
    hashtags: "#framework, #javascript, #react.js, #vue.js",
    image: "/images/posts/post8.png",
  },
];

function Feed() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
