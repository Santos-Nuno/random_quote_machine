import "./App.css";
import React from "react";

class Simpsons extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: null,
      character: null,
      image: null,
      characterDirection: null,
    };
  }

  getNewQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image: data[0].image,
          characterDirection: data[0].characterDirection,
        });
      });
  }

  render() {
    const CharacterImage = this.state.image;
    if (this.state.quote === null) {
      this.getNewQuote();
    }

    return (
      <div className="container-fluid main-section rounded position-absolute top-50 start-50 translate-middle">
        <div className="container-fluid position-relative">
          <div id="quote-box" className="container-fluid position-relative">
            <p id="text">"{this.state.quote}"</p>
            <p id="author">- {this.state.character} -</p>
            <button
              type="button"
              onClick={() => this.getNewQuote()}
              className="btn position-absolute"
              id="new-quote"
            >
              EAT MY QUOTE
            </button>
            <a href="https://twitter.com/intent/tweet" id="tweet-quote" className="position-absolute rounded">
              <button type="button" className="btn button-tweet">TWEET MY QUOTE</button>
            </a>
          </div>
          <img
            src={CharacterImage}
            className="Character-image position-absolute"
            alt="character"
          />
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App font-link">
      <header className="App-header">
        <img
          src="https://i.postimg.cc/3xvYcLr1/The-Simpsons-Logo-PNG.png"
          className="App-logo"
          alt="logo"
        />
      </header>
      <div>
        <Simpsons />
      </div>
    </div>
  );
}

export default App;
