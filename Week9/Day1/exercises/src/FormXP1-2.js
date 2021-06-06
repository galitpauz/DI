import React from 'react'

class Forms extends React.Component {
  constructor() {
    super()
    this.state = {
      title:'',
      author:'',
      genre:'',
      year:'',
      sent:''
    }
  }

handleChange = (event) => {
  console.log(event.target.value)
  const value = event.target.type=='checkbox' ? event.target.checked : event.target.value;
  this.setState({[event.target.name]:value})
}

handleSubmit = (event) => {
  const {title,author,year,genre,sent} = this.state;

  event.preventDefault()
const obj = {title,author,year,genre}
  console.log(obj)
  this.setState({sent:'data is sent'})

}

  render(){
    const {title,author,year,genre,sent} = this.state;
    return(
      <>
      <h1>{sent}</h1>
      <form onSubmit={this.handleSubmit}>
      Title: <input type="text" name='title' onChange={this.handleChange}/>
      <p>{title}</p>
      Author: <input type="text" name='author' onChange={this.handleChange}/>
      <p>{author}</p>
      Genre: <input type="text" name='genre' onChange={this.handleChange}/>
      <p>{genre}</p>
      Year Published: <input type="year" name='year' onChange={this.handleChange}/>
      <p>{year}</p>

      <input type="submit" value="Submit"/>
      </form>
      </>
    )
  }
}

export default Forms