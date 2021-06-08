import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import React from "react";
import Child from "./Child";

import { changePropertyOne, changePropertyTwo } from './redux/action';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // property_one: 'text one',
            // property_two: 'text_two'
        }
    }

    // handleChange = (event) => {
    //     this.setState({property_one:event.target.value})
    // }

    // handleClick = () =>{
    //     const {property_one} = this.state;
    //     this.setState({property_two:this.state.property_one})
    // }

    render() {
        // const {property_one,property_two} = this.state;
        console.log(this.props) //is the store
        return (
          <>
            <div >
                <h1>Simple Redux Example</h1>
                <h3>property one: {this.props.prop_one}</h3>
                <input type="text" onChange={this.props.handleChange}/>
                <h3>property two:{this.props.prop_two}</h3>
                <button onClick={() => this.props.handleClick}>Click</button>
            </div>
            <Home/>
          </>
        );
    }
}

const mapStateToProps = (state) =>{
  return {
    prop_one: state.property_one_one,
    prop_one: state.property_two_two,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange:(event) => dispatch(changePropertyOne(event.target.value)),
    handleClick: () => dispatch(changePropertyTwo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);