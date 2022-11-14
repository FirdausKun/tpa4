import WebDevImg from "../assets/webDevBadge.png";
import Bookshelf from "../assets/bookshelf.jpg";
import BMI from "../assets/BMI.png";
import Card from "react-bootstrap/Card";
const Projects = () => {
  return (
    <>
      <article>
        <h2 className="sub-title">Projects </h2>
        <br />
        <section className="cards">
          <Card className="card" style={{ width: "16rem" }}>
            <a href="https://skilvul.com/paths/web-development-pemula/student/FiKuRa">
            <Card.Img variant="top" src={WebDevImg} />
            <Card.Body>
              <Card.Title><b>Skilvul Certificate</b></Card.Title>
              <Card.Text>Web Development Beginner Certificate</Card.Text>
            </Card.Body>
            </a>
          </Card>
          <Card className="card" style={{ width: "16rem" }}>
            <a href="https://github.com/FirdausKun/Bookshelf-Web-App">
            <Card.Img variant="top" src={Bookshelf} />
            <Card.Body>
              <Card.Title><b>Bookshelf Web-App</b></Card.Title>
              <Card.Text>Bookshelf Web-App</Card.Text>
            </Card.Body>
            </a>
          </Card>
          <Card className="card" style={{ width: "16rem" }}>
            <a href="https://github.com/FirdausKun/Technical-Project-Assignment-TPA/tree/main/TPA02">
            <Card.Img variant="top" src={BMI} />
            <Card.Body>
              <Card.Title><b>BMI Calculator</b></Card.Title>
              <Card.Text>BMI Calculator Web-App</Card.Text>
            </Card.Body>
            </a>
          </Card>
        </section>
      </article>
    </>
  );
};
export default Projects;
