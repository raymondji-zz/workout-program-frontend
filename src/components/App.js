import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import dayListComponent from './dayList/dayListComponent.js';

const App = React.createClass({
  render() {
    return (
    	<div>
    		<h1> Hello World. </h1>
    		<dayListComponent />
    	</div>
    	// <div>
    	// 	<h1>TEST</h1>
     	//    </div>
        // <ul role="nav">
        //   <li><Link to="/test">test</Link></li>
        // </ul>
    )
  }
})

export default App;
