import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import ReactImageGallery from "react-image-gallery";
import canon from "../../Assets/canon.png";
import plants from "../../Images/plants.json";
import wildlife from "../../Images/wildlife.json";
import misc from "../../Images/misc.json";

function Gallery() {
  return (
    <Container fluid className="gallery-section">
      <Particle />
      <Container>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          Sample <strong className="purple">Galleries</strong>{" "}
        </h1>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <h3> Wildlife </h3>
          <ReactImageGallery items={wildlife} style={{ width: "50%" }} />
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
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <h3>Misc</h3>
            <ReactImageGallery
              items={misc}
              showPlayButton="false"
              autoPlay="true"
            />
          </Col>
          <Col
            md={5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              paddingTop: "30px",
              paddingBottom: "30px",
              whiteSpace: "pre-line",
            }}
            className="circular-image"
          >
            <h3>My Camera</h3>
            <a href="https://www.amazon.com/Canon-Rebel-Digital-EF-S-18-55mm/dp/B00T3ER7QO">
              <Tilt tiltReverse="true">
                <img
                  src={canon}
                  alt="Canon EOS Rebel T6i"
                  className="img-fluid rounded-circle"
                  width="300"
                ></img>
              </Tilt>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Gallery;
