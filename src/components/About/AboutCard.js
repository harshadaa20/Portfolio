import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harshada Jagade </span>
             from <span className="purple"> Mumbai, India.</span>
            <br />
            I am Final Year student at SNDT University.
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
           
          </ul>

         
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
