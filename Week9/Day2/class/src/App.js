import './App.css';
import React from "react";
import {connect} from "react-redux";
// import {changePropertyOne, changePropertyTwo, handleCounter} from "./redux/action";
// import {MovieList} from './components/MovieList'
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
// import Child from "./components/Child";


class App extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
       const {} = this.props
        return (
            <>
            <h1>
              movie list
            </h1>
            <MovieList/>
            <h1>
              movie 
            </h1>

            <MovieDetails/>
            </>
        );
    }


}

// const mapStateToProps = (state) => {
//     return {
//       chose:state.item
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }

export default (App);
