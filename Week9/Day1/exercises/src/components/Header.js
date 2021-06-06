import React from 'react'

const Header = ({navigate}) => {
    return(
        <>
        <div onClick={()=>this.navigate('home')}>Home</div>
        <div onClick={()=>this.navigate('about')}>about</div>
        <div onClick={()=>this.navigate('contact')}>about</div>
        </>
    )
}


export default Header