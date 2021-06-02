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

// componentDidUpdate() {
//   document.getElementById("divcolor").innerHTML =
//   "The updated favorite is " + this.state.favoriteColor;
// }
// render() {
//   return (
//     <div>
//     <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//     <div id="divcolor"></div>
//     </div>
//   );
// }
// }


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
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById("div1").innerHTML =
//     "Before the update, the favorite was " + prevState.favoriteColor;
//   }
//   componentDidUpdate() {
//     document.getElementById("div2").innerHTML =
//     "The updated favorite is " + this.state.favoriteColor;
//   }
//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoriteColor}</h1>
//         <div id="div1"></div>
//         <div id="div2"></div>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'));


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      show: true
    };
  }
  deleteHeader = () => {
    this.setState({ show:false });
  }
  render() {
    let hello;
    if (this.state.show) {
      hello = <Child />;
    };
    return (
      <div>
      {hello}
      <button type="button" onClick={this.deleteHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
