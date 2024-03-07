// WordsScreen Component
import React, { useState } from "react";

import Words from "../components/Words";
import { Container } from "react-bootstrap";
const WordsScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const handlePassValue = (value) => {
    setInputValue(value);
  };

  return (
    <Container>
      <Words />
    </Container>
  );
};

export default WordsScreen;
