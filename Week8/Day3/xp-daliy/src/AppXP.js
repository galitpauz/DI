import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor: "red"};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoriteColor: "yellow"})
//     }, 1000)
//   }
//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//     );
//   }
// }


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoriteColor: "red"};
//   }
//   changeColor = () => {
//     this.setState({favoriteColor: "blue"});
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoriteColor: "red"};
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({favoriteColor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoriteColor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

export default App;
