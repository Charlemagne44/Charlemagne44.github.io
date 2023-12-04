import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "../About/Techstack";
import Aboutcard from "../About/AboutCard";
import laptopImg from "../../Assets/rowing_pic.png";
import Tilt from "react-parallax-tilt";
import ReactImageGallery from "react-image-gallery";

const wildlife = [
  {
    original: "https://i.imgur.com/72ADD53.jpg",
    thumbnail: "https://i.imgur.com/72ADD53.jpg",
    originalHeight: "600px",
    originalWidth: "600px",
  },
  {
    original: "https://i.imgur.com/K3P1VRK.jpeg",
    thumbnail: "https://i.imgur.com/K3P1VRK.jpeg",
    originalHeight: "600px",
    originalWidth: "600px",
  },
  {
    original: "https://i.imgur.com/7jjwAE3.jpeg",
    thumbnail: "https://i.imgur.com/7jjwAE3.jpeg",
  },
  {
    original: "https://i.imgur.com/36jj8Rt.jpeg",
    thumbnail: "https://i.imgur.com/36jj8Rt.jpeg",
  },
  {
    original: "https://i.imgur.com/mnhBjck.jpeg",
    thumbnail: "https://i.imgur.com/mnhBjck.jpeg",
  },
  {
    original: "https://i.imgur.com/5cRdS1r.jpeg",
    thumbnail: "https://i.imgur.com/5cRdS1r.jpeg",
  },
  {
    original: "https://i.imgur.com/Crvsnre.jpeg",
    thumbnail: "https://i.imgur.com/Crvsnre.jpeg",
  },
  {
    original: "https://i.imgur.com/GPxwwn8.jpeg",
    thumbnail: "https://i.imgur.com/GPxwwn8.jpeg",
  },
  {
    original: "https://i.imgur.com/YgPGwco.jpeg",
    thumbnail: "https://i.imgur.com/YgPGwco.jpeg",
  },
];

const plants = [
  {
    original: "https://i.imgur.com/dfyXYUS.jpeg",
    thumbnail: "https://i.imgur.com/dfyXYUS.jpeg",
  },
  {
    original: "https://i.imgur.com/tfIGee2.jpeg",
    thumbnail: "https://i.imgur.com/tfIGee2.jpeg",
  },
  {
    original: "https://i.imgur.com/XlzPL26.jpeg",
    thumbnail: "https://i.imgur.com/XlzPL26.jpeg",
  },
  {
    original: "https://i.imgur.com/vhKl3Nd.jpeg",
    thumbnail: "https://i.imgur.com/vhKl3Nd.jpeg",
  },
  {
    original: "https://i.imgur.com/7rJ7Fzj.jpeg",
    thumbnail: "https://i.imgur.com/7rJ7Fzj.jpeg",
  },
  {
    original: "https://i.imgur.com/qO10tS6.jpeg",
    thumbnail: "https://i.imgur.com/qO10tS6.jpeg",
  },
  {
    original: "https://i.imgur.com/KUgLnWT.jpeg",
    thumbnail: "https://i.imgur.com/KUgLnWT.jpeg",
  },
  {
    original: "https://i.imgur.com/jOvgGXQ.jpeg",
    thumbnail: "https://i.imgur.com/jOvgGXQ.jpeg",
  },
  {
    original: "https://i.imgur.com/xocZwo1.jpeg",
    thumbnail: "https://i.imgur.com/xocZwo1.jpeg",
  },
  {
    original: "https://i.imgur.com/EC01xfD.jpeg",
    thumbnail: "https://i.imgur.com/EC01xfD.jpeg",
  },
  {
    original: "https://i.imgur.com/pBgqBTj.jpeg",
    thumbnail: "https://i.imgur.com/pBgqBTj.jpeg",
  },
  {
    original: "https://i.imgur.com/wIu86sZ.jpeg",
    thumbnail: "https://i.imgur.com/wIu86sZ.jpeg",
  },
];

function Gallery() {
  return (
    <Container fluid className="gallery-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Sample <strong className="purple">Galleries</strong>{" "}
          </h1>
          <Col
            md={7}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            className="about-img circular-image"
          >
            <h3> Wildlife </h3>
            <ReactImageGallery items={wildlife} />
          </Col>
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            className="about-img circular-image"
          ></Col>
        </Row>
        <br />
        <br />
        <Row style={{ justifyContent: "center", padding: "20px" }}>
          <h3> Plants </h3>
          <ReactImageGallery items={plants} />
        </Row>
        <Row style={{ justifyContent: "center", padding: "20px" }}>
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            className="about-img circular-image"
          >
            <h4> Misc </h4>
          </Col>
          <Col
            md={5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
            className="about-img circular-image"
          >
            <h4> My Gear </h4>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Gallery;
