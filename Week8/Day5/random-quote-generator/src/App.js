import './App.css';
import React from 'react';
import quotes from './QuotesDatabase';
import Quotes from './Quotes';




class App extends React.Component {
    constructor() {
      super();
      this.state = {
        quotesList: quotes,
        random: 0

      }
    }

    getRandom = () => {
      return Math.floor(Math.random() * this.state.quotesList.length);
       
    }

    randomColor() {
      const rgb = `rgb(
        ${Math.floor(Math.random() * 155)}
        ${Math.floor(Math.random() * 155)}
        ${Math.floor(Math.random() * 155)}
      )`
      return rgb
    }
    handleClick = () => {
       this.setState({random: this.getRandom()})   
    }





  render() {
    const randomColor = this.randomColor();
    const {quotesList, random } = this.state
    return (
          <Quotes 
          quotesList={quotesList} random={random} handleClick={this.handleClick}
          displayColor={randomColor}
          />


    )

  }
}
//before copy to comp
    // render() {
    //   // console.log(quotes)
    //   const {quotesList, random} = this.state
    //   // console.log(random)

    //   return (
    //     // <Quotes quotesList={quotesList} random={random} handleClick={this.handleClick}>
    //     <>
    //     <div>
    //       {quotesList[random].quote}

    //     </div>
    //     <h1>
    //       {quotesList[random].author}
    //     </h1>
    //     <button onClick={this.handleClick}>Get New Quotes</button>
    //     </>

    //   )
    // }

export default App;
