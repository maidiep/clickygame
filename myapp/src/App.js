import React, { Component } from 'react';
import './App.css';
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "",
    shakeit: "false"
  };
  clickPicture = id => {
    // randomize cards
    const shuffledArray = this.shuffleArray(cards);
    this.setState({cards: shuffledArray});
    // if click on an image already clicked, set this.state.score = 0; empty clickeadArray
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [], message: "You clicked that image already. Play again.", shakeit: "true"});
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        message: "Yay!",
        shakeit: "false"
      });
    }
    // set topscore = score if score>topscore.
    if (this.state.score >= this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
    //win if score is equal to 12
    if(this.state.score === 11){
      this.setState({message:"You win!"});
    }

  }
  shuffleArray = (picturesArray) => {
      for (let i = picturesArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
      }
      return picturesArray;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game Built with React</h1>
          <h3 className="App-intro">
          <strong>Click on a zodiac to earn points but you can't click the same one more than once.</strong> 
          <p className = "score"><strong>Score: {this.state.score} | HighScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </h3>
        </header> 
        <br/>
        <Wrapper
        shakeWrapper = {this.state.shakeit}
        pictures=
          {this.state.cards.map(picture => (
            <PictureCard
              clickPicture={this.clickPicture}
              id={picture.id}
              key={picture.id} 
              name={picture.name}
              image={picture.image}
            />
          ))}
        />
      </div>
    );
  }
}
export default App;

