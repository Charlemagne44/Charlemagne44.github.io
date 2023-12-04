import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import Particle from "../Particle";
import Post from "./Post";
import Readme from "./Readme";

function Home() {
  return (
    <section>
      <Container fluid className="blog-section" id="blog">
        <Particle />
        <Container>
          <Post
            date="12/4/2023"
            title="cTree"
            desc="A recursive tree growing algorithm written entirely with C and GNU make tools"
            img="https://i.imgur.com/KmYFBXa.png"
            alt="c ascii tree"
            url="https://github.com/Charlemagne44/cTree/tree/main"
          ></Post>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
