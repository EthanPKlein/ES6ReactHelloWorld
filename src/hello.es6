class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

class HelloMessageMultiProps extends React.Component {
  render() {
    return <div>Hello {this.props.name} from {this.props.city}, {this.props.country}</div>;
  }
}

ReactDOM.render(<HelloMessage name="world" />,
  document.getElementById('div1'));

  ReactDOM.render(<HelloMessageMultiProps name="Bob" city="London" country="UK" />,
  document.getElementById('div2'));
  
  ReactDOM.render(<HelloMessageMultiProps name="Sam" city="San Francisco" country="US" />,
  document.getElementById('div3'));