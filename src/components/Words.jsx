import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Words = () => {
  const [words, setWords] = useState("");
  const [word, setWord] = useState("");
  const [synonyms, setSynonyms] = useState("");
  const [examples, setExamples] = useState("");

  const fetchWords = async (word) => {
    if (!word.trim()) {
      return;
    }
    const options = {
      method: "GET",
      url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
      headers: {
        "X-RapidAPI-Key": "9c201b076dmsh9bd5caba53d0eb5p138352jsncdc232706d84",
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setWords(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSynonyms = async (word) => {
    const options = {
      method: "GET",
      url: `https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`,
      headers: {
        "X-RapidAPI-Key": "9c201b076dmsh9bd5caba53d0eb5p138352jsncdc232706d84",
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setSynonyms(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchExamples = async (word) => {
    const options = {
      method: "GET",
      url: `https://wordsapiv1.p.rapidapi.com/words/${word}/examples`,
      headers: {
        "X-RapidAPI-Key": "9c201b076dmsh9bd5caba53d0eb5p138352jsncdc232706d84",
        "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setExamples(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchAPI = async (word) => {
      fetchWords(word);
      fetchSynonyms(word);
      fetchExamples(word);
    };
    fetchAPI(word);
  }, [word]);

  const handleInputChange = (newValue) => {
    setWord(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAPI(word);
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
        {words ? (
          <Container>
            <Row>
              <Col>{words.word}</Col>
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
              <Accordion.Item eventKey="1">
                <Accordion.Header>Example Sentences</Accordion.Header>
                <Accordion.Body>
                  {examples &&
                    examples.examples &&
                    examples.examples.map((example, index) => (
                      <p className="inline text-red-900" key={index}>
                        {example}
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
export default Words;
