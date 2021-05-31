// import logo from './logo.svg';
import React from 'react';
import './App.css';
import BootstrapCard from './BootstrapCard';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: [
        {
          language: "PHP",
          votes: 0
        },
        {
          language: "Python",
          votes: 0
        },
        {
          language: "JavaScript",
          votes: 0
        },
        {
          language: "Java",
          votes: 0
        }
      ]
    }
  }
  addVote = (event) => {
    const name = event.target.parentNode.id;
    const index = this.state.languages.findIndex(a => a.language === name);
    
    const newItems = [...this.state.languages];
    newItems[index].votes++;
    this.setState({languages:newItems});
  }
  render() {
    console.log();
    return (
        this.state.languages.map((item, i) => {
          return <BootstrapCard language={item.language} votes={item.votes} handleClick={this.addVote} key={i}/>
        })

      )
  }
}



// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

export default App;
