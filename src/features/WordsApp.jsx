import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSynonyms,
  selectSynonymsErr,
  selectSynonymsStatus,
  selectDefinations,
  fetchDefinations,
  fetchSynonyms,
} from "./ApiSlice.js";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Definations from "../components/Definations.jsx";

const WordsApp = () => {
  const dispatch = useDispatch();
  const definations = useSelector(selectDefinations);
  const synonyms = useSelector(selectSynonyms);
  const synonymsStatus = useSelector(selectSynonymsStatus);
  const synonymsError = useSelector(selectSynonymsErr);
  const [word, setWord] = useState("");

  useEffect(() => {
    if (word) {
      dispatch(fetchSynonyms(word));
      dispatch(fetchDefinations(word));
    }
  }, [word, dispatch]);

  const handleInputChange = (newValue) => {
    setWord(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word) {
      dispatch(fetchSynonyms(word));
    }
  };

  return (
    <Container className="mt-4 px-5">
      <Col>
        <Form onSubmit={handleSubmit}>
          <Col>
            <Form.Control
              className="p-2"
              type="text"
              value={word}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Enter a word"
            />
          </Col>
          <Button type="submit" variant="outline-secondary">
            Search
          </Button>
        </Form>
      </Col>
      <Col>
        {definations ? (
          <Container>
            <Row>
              <Col>
                <span>
                  <strong>Word:</strong>{" "}
                  {definations.definitions[0].definitions}
                </span>
              </Col>
            </Row>
          </Container>
        ) : (
          <p>Enter a word to search</p>
        )}
      </Col>
      <Col>
        {synonyms ? (
          <Container>
            <Row>
              <Col>
                <h4>{synonyms.word}</h4>
              </Col>
            </Row>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Synonyms</Accordion.Header>
                <Accordion.Body>
                  {synonyms &&
                    synonyms.synonyms &&
                    synonyms.synonyms.map((synonym, index) => (
                      <p className="inline text-red-900" key={index}>
                        {synonym}
                      </p>
                    ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        ) : (
          <p>Enter a word to search</p>
        )}
      </Col>
    </Container>
  );
};

export default WordsApp;
