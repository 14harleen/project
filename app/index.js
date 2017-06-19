var React = require('react');
var ReactDOM = require('react-dom');
import App from './Components/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
