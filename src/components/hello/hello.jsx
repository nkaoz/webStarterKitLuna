import React from 'react'
import hello from './hello.scss'

class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Neil"
    };
  }
  render(){
    return (<h2>Hello {this.props.name}</h2>);
  }
}

export default Hello
