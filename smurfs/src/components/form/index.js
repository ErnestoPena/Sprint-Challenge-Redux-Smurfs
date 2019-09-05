import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions/actions.js';
import './form.css';

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			age: '',
			height: '',
		};
	}
	

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	addNewSmurf = event => {
		event.preventDefault();
		this.props.addSmurf(this.state);
	};
	render() {
		return (
		<div className='form-wrapper'>	
			<form action="" className="form-class">
				<input className='form-inputs'
					onChange={this.handleChange}
					name="name"
					value={this.state.name}
					type="text"
					placeholder="Name"
				/>
				<input className='form-inputs'
					onChange={this.handleChange}
					name="age"
					value={this.state.age}
					type="text"
					placeholder="Age"
				/>
				<input className='form-inputs'
					onChange={this.handleChange}
					name="height"
					value={this.state.height}
					type="text"
					placeholder="Height"
				/>
				
					<button className="submit" onClick={this.addNewSmurf}>
						Add New
					</button>
				
			</form>
		</div>	
		);
	}
}

const mapStateToProps = state => {
	return {
		isAdding: state.isAdding,
	};
};
export default connect(mapStateToProps, { addSmurf })(Form);