import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

const myContex = React.createContext();
const App = () => {
  return (
    <myContex.Provider value='hello my friend' >
      <Child />
    </myContex.Provider>
  );
};

const Child = () => {
  const value = useContext(myContex);
  return <p>{value}</p>;
}

ReactDOM.render(<App></App>, document.getElementById('root'));