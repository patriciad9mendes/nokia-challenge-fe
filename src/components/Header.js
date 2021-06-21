import React from "react";
import ReactDOM from 'react-dom';
import { Jumbotron, Container } from 'react-bootstrap';

//Style
import '../style/Header.css';

class Header extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1>Nokia - Frontend Challenge</h1>
        </Container>
      </Jumbotron>
    )
  }
}

export default Header;
