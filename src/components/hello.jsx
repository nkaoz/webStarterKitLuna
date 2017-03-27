import React from 'react';
import 'style/components/hello.scss';

class Hello extends React.Component {
  constructor() {
    super();
  }
  render(){
    return (<h2>Hello {this.props.name}</h2>);
  }
}

export default Hello
