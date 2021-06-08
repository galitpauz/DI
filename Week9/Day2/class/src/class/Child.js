import React from 'react'
import {connect} from 'react-redux';

const Child = () =>{

    return (
    <div className={'App'}>
        <h1>Child</h1>
        {props.property_one}<br/>
        {props.property_two}
     
    </div>
    )
}
const mapStateToProps = (state) => {
    return {
        prop_one: state.property_one_one,
        prop_one: state.property_two_two,
    
      }
}

const mapDispatchToProps = (dispatch) => {


}

export default connect(mapStateToProps, mapDispatchToProps)(Child)
