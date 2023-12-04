import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Post from "./Post";

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
          ></Post>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
