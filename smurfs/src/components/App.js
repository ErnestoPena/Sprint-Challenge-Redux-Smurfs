import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './list/thelist.js';
import Form from './form';
import { getSmurfs } from '../actions/actions.js'
import './App.css';

class App extends Component {

  componentDidMount() {
		this.props.getSmurfs();
  }
  
  render() {
    if (this.props.isFetching) {
			return <div>Please wait while we update...</div>;
		}
    return (
      <div className="App">
        <div><h1>SMURFS! 2.0 W/ Redux</h1></div>
        
        <div className='component-holder'>
					<List smurfs={this.props.smurfs} />
					<Form />
				</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs,
		isFetching: state.isFetching,
	};
}

export default connect(mapStateToProps , { getSmurfs })(App);
