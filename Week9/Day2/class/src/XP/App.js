import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import React from "react";
import {increase} from './redux/action'
import {decrease} from './redux/action'
// import Child from "./Child";




class App extends React.Component {
    constructor(props) {
        super(props);

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
        const {increaseCount, decreaseCount} =this.props
        return (
          <>
            <div >
                <p>Simple Redux Example</p>

                <button onClick={() => increaseCount}>Click Up</button>
                <button onClick={() => decreaseCount}>Click Down</button>
            </div>
          </>
        );
    }
}

const mapStateToProps = (state) =>{
  return {
    count: state.count

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount:() => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);