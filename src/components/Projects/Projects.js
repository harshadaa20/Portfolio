import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import raksha from "../../Assets/Projects/raksha.png";
import b from "../../Assets/Projects/b.jpeg";
import slogo from "../../Assets/Projects/slogo.jpg";
import fitsure from "../../Assets/Projects/fitsure.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={b}
              isBlog={false}
              title="Technology Summer Intern - Barclays"
              description="Worked as BA3 intern in PBWM-CLM of Barclays.
During this tenure, I developed a Query Widget for the onboarding of high-net-worth individuals."
              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slogo}
              isBlog={false}
              title="SatvikRitu"
              description="We Promote Menstrual Well-Being Globally By Providing Accurate Information, Engaging Discussions, And Reviewing Menstrual Products.
              Tech Stack: WordPress"
             
              demoLink="https://satvikritu.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitsure}
              isBlog={false}
              title="Fitsure"
              description="We created health website , fitsure to help you to be tension free and healthy ! A website for you ,to make you healthy,happy,fit. "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raksha}
              isBlog={false}
              title="Rakshini"
              description=" JP Morgan-Good For Design competition winning solution designed on Figma , addressing sexual abuse with an engaging and responsive approach. "
              ghLink="https://www.figma.com/file/hHIvdmah1eilJIVMTvDLWZ/Rakshini--Raksha-against-sexual-Abuse?type=design&node-id=0-1&mode=design&t=auJ6dGtmdIMuuQk9-0"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
