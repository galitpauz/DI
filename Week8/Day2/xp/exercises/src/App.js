// import logo from './logo.svg';
import React from 'react';
import PrintHello  from './components/PrintHello.js';
import BootstrapCard  from './components/BootstrapCard.js';
import Jumbotron  from './components/Jumbotron.js';
import Alert  from './components/Alert.js';
import './App.css';

function App() {
  
  return (
    <>
      <BootstrapCard
      title = "Bob Dylan"
      imageUrl = "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg"
      buttonLabel = 'Go to Wikipedia'
      buttonUrl = "https://en.wikipedia.org/wiki/Bob_Dylan"
      description = "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades."
      />
      <BootstrapCard
      title='McCartney'
      imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg'
      buttonLabel='Go to Wikipedia'
      buttonUrl='https://en.wikipedia.org/wiki/Paul_McCartney'
      description='Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.'
    
      />
      <Jumbotron
      title="Welcome to react"
      description="React is the most popular rendering library in the world"
      buttonLabel="Go to the official website"
      buttonURL="https://reactjs.org/"
      />
      <Alert 
      text="OMG! Something really bad has happended!" 
      color = "orange"
      />
    
      <PrintHello />
    </>

  );
}

export default App;
