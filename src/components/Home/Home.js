import React, { useState, useEffect } from "react";
import "./Home.css";
import { Card, CardImg, CardText, CardBody } from "reactstrap";
import axios from "axios";

export default function Home() {
  const [activeKey, setActiveKey] = useState({ key: "" });

  const [posts, setPosts] = useState([]);
  // using exiost to get data from api
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://lesson-29-heroku-2.glitch.me/api/posts/"
      );
      setPosts(res.data.fullPosts);
      console.log("data1", res.data.fullPosts);
    };
    fetchPosts();
  }, []);
  console.log("posts", posts);

  const run = index => {
    console.log("index", index);
    setActiveKey({ key: index });
  };

  return (
    <div className="home mt-5 d-flex flex-column align-items-center">
      {posts.slice(0, 4).map((item, index) => (
        <Card key={index} className="mb-5" style={{ width: "50%" }}>
          <CardImg top height="auto" src={item.url} alt="Card image cap" />
          <CardBody>
            <h3 onClick={() => run(index)}>{item.title}</h3>
            {activeKey.key === index && <CardText>{item.content}</CardText>}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
