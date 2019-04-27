import React, {Component} from 'react';

import API from '../utils/API'

class Banner extends Component {
	state = {
		message: ''
	}

	componentDidMount() {
		API.getMessage(this.props.token)
		.then(res => res.json())
		.then(data => {
			this.setState({ message: data.message})
		});
	}

	render() {
		return (
			<div className="Banner"> 
				<div className='message'>{this.state.message} </div>
			</div>
		)
	}
}

export default Banner;