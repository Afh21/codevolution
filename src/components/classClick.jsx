import React, { Component } from 'react'

class ClassClick extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hi world!',
             isChanged: false

        }
    }

    sayGoodBye = _ => this.setState({ message: 'Good bye!', isChanged: !this.state.isChanged })
    
    sayHelloWorld = _ => this.setState({ message: 'Hi World', isChanged: !this.state.isChanged }) 
    
    render() {

        const { message, isChanged } = this.state

        return (
            <div>
                 <h3> { message } </h3> <p> changed: { isChanged.toString() }</p>
                {
                    isChanged 
                    ? 
                        <button onClick={this.sayHelloWorld} >Click Hello!</button>                
                    :
                        <button onClick={this.sayGoodBye} >Click Bye!</button>                
                }
                
            </div>
        )
    }
}

export default  ClassClick
