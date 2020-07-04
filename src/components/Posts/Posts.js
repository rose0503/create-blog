import React, { useState } from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";

const Posts = ({ posts, loading }) => {
  const [activeKey, setActiveKey] = useState({ key: "" });

  if (loading) {
    return <h2>loading....</h2>;
  }

  const run = index => {
    console.log("index", index);
    setActiveKey({ key: index });
  };

  return (
    <div className="home mt-5 d-flex flex-column align-items-center">
      {posts.map((item, index) => (
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
};
export default Posts;
