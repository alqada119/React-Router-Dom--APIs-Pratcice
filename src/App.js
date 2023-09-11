import logo from './logo.svg';
import './App.css';
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {props.date}
        </p>
        <Link to="another">
        {props.name}
        </Link>
      </header>
    </div>
  );
}
App.propTypes={
  name:propTypes.string
}
App.defaultProps={
  name:"Abo Ahmed"
}

export default App;
