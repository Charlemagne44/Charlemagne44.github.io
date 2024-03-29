import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Post from "./Post";

function Projects() {
  return (
    <section>
      <Container fluid className="blog-section" id="blog">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px"}}>
          <Col className="d-flex justify-content-center" style={{ padding: "10px" }}>
              <Post
                date="12/4/2023"
                title="cTree"
                desc="A recursive tree growing algorithm written entirely with C and GNU make tools"
                img="https://i.imgur.com/KmYFBXa.png"
                alt="c ascii tree"
                url="https://github.com/Charlemagne44/cTree/tree/main"
              ></Post>
            </Col>
            <Col className="d-flex justify-content-center" style={{ padding: "10px" }}>
              <Post
                date="08/20/2023"
                title="ARSP"
                desc="Basic diagrams and classes for an auto rotating solar panel with Arduino"
                img="https://github.com/Charlemagne44/ARSP_Prototype/raw/main/diagrams/class_diagram.png"
                alt="ARSP_Prototype"
                url="https://github.com/Charlemagne44/ARSP_Prototype"
              ></Post>
            </Col>
            <Col className="d-flex justify-content-center" style={{ padding: "10px" }}>
              <Post
                date="06/16/2023"
                title="Golang Rotating Torus"
                desc="A live rotating ascii torus written entirely in Go"
                img="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzQ1d3d6cHBkbmhweTNkMTI5ZjY4aXU4ZnJieDQ2NnhpcGp5YnNsNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ycobgCQ3yMn4eJ949Q/giphy.gif"
                alt="Golang_Torus"
                url="https://github.com/Charlemagne44/golang_torus"
              ></Post>
            </Col>
            <Col className="d-flex justify-content-center" style={{ padding: "10px" }}>
              <Post
                date="04/04/2023"
                title="Word Crack"
                desc="A brute force approach to the popular gamepigeon word game: Word Hunt"
                img="https://github.com/Charlemagne44/WordCrack/raw/main/resources/output.png"
                alt="WordCrack"
                url="https://github.com/Charlemagne44/WordCrack"
              ></Post>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col className="d-flex justify-content-center" style={{ padding: "10px"}}>
              <Post
                date="12/23/2022"
                title="Golang Game of Life"
                desc="The Game of Life simulation ported to the terminal in Golang"
                img="https://camo.githubusercontent.com/86ca1d7b22c93bc4d1d7d3bb9b711e0fffcdbd9e51f8d16fbc054a45c875dca8/687474703a2f2f692e696d6775722e636f6d2f50354a4e50746a2e676966"
                alt="GameOfLife"
                url="https://github.com/Charlemagne44/GolangGameOfLife"
              ></Post>
            </Col>
            <Col className="d-flex justify-content-center" style={{ padding: "10px" }}>
              <Post
                date="12/21/2022"
                title="Ascii Art Generator"
                desc="Convert any image to Ascii with the power of golang!"
                img="https://github.com/Charlemagne44/GolangAsciiArt/raw/main/samples/knight_result.png"
                alt="GolangAsciiArt"
                url="https://github.com/Charlemagne44/GolangAsciiArt"
              ></Post>
            </Col>
            <Col className="d-flex justify-content-center" style={{ padding: "10px" }}>
              <Post
                date="10/12/2020"
                title="Bannerlord Native Mod"
                desc="A simple mod to mitigate grinding and speed up progression"
                img="https://image.api.playstation.com/vulcan/ap/rnd/202212/1905/euRPguOnriw6H2HvYQPtIYZ4.jpg"
                alt="VexxedNativeBannerlord"
                url="https://github.com/Charlemagne44/RenownTweaks"
              ></Post>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Projects;
