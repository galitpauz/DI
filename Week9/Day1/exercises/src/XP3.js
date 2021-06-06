import React from 'react'

class XP3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props=[],
            errorMsg:''
        }
    }
    async componentDidMount(){
        const request = await axios.get()
        const data = await request.data
        this.setState({posts:data})
    }

    render(){
        const {posts} = this.state
        return (
            <Posts posts={}/>
        )

    }
}

export default XP3