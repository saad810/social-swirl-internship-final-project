import React from "react";
import { Container } from "react-bootstrap";
const HomeScreen = () => {
  return (
    <Container className="pt-4">
      <h3>Saad Amin</h3>
      <h6>saadameen810@gmail.com</h6>
      <strong className="text-danger">Sorry for the late submission</strong>
      <span className="px-2 text-muted">
        My lap top broke down and it took 3 days to sort it
      </span>

      <p className=" d-block lead text-dark">I have completed the All tasks</p>
      <ul>
        <li>Todo App</li>
        <li>
          Rapid Api{" "}
          <a href="https://rapidapi.com/dpventures/api/wordsapi/">Words Api</a>{" "}
          used hooks and axios
        </li>
        <li>Words Api with Redux Also</li>
        <li>Complex components Structure</li>
        <li>Modern UI</li>
        {/* <li>React Router</li> */}
      </ul>
      <ul>
        <span className="lead">Libraries and Technologies Used</span>
        <li>React</li>
        <li>React Bootstrap</li>
        <li>Redux</li>
        <li>React Router</li>
        <li>Axios</li>
        <li>React Icons</li>
      </ul>
      <h6>
        Hope you will consider my late submission and give me a chance to
        explore this internship
      </h6>
    <h5>App is hosted on Vercel: 
      <a href="https://social-swirl-internship-final-project.vercel.app/">Vercel Link</a>
    </h5>
    </Container>
  );
};

export default HomeScreen;
