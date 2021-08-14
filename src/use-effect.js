﻿import React, {Component, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);
  if (visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>
          +
        </button>
        <button onClick={() => setVisible(false)}>
          hide
        </button>
        <ClassCounter value={value}/>
        <HookCounter value={value} />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>show</button>
  }
};

const HookCounter = ({value}) => {
  useEffect(() => {
    return () => console.log('clear')
  }, [value]);
  return <p>{value}</p>
};
class ClassCounter extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  };

  componentDidUpdate() {
    console.log('componentDidUpdate');
  };

  componentWillUnmount() {
    console.log('componentWillUnmount');
  };

  render() {
    return <p>{this.props.value}</p>;
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));