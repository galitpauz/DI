import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             obj:null
        }
        this.handelSubmit=this.handelSubmit.bind(this)
    }
    handelSubmit (e){
        e.preventDefault()
        const allInput = document.querySelectorAll('input')
        console.log(allInput)

let result= {
    Title: allInput[0].value,
    Author: allInput[1].value,
    Genre: allInput[2].value,
    yearPublished: allInput[3].value

}
console.log(result)
this.setState({
    obj:result
})
    }
    render() {
        const {obj}=this.state
        if(obj){
            console.log(obj)
            console.log('from render') 
            document.querySelector('p').style.display = 'block'
        }
        return (
            <div>
                <p style={{ display: 'none' }}> data sent! </p>

                <form onSubmit={this.handelSubmit}>
                    <label htmlFor="">Title</label>
                    <input type="text" /> <br />
                    <label htmlFor="">Author</label>
                    <input type="text" /> <br />
                    <label htmlFor="">Genre</label>
                    <input type="text" /> <br />
                    <label htmlFor="">Year Published</label>
                    <input type="text" /> <br />
                    <button type="submit">Submmit</button>
                </form>
            </div>
        )
    }
}

export default Form