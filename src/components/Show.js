import React, {Component} from 'react'

export default class Show extends Component {
	render () {
		const {num} = this.props;
		
		return (
			<div>
				<h4>Numer: {num} </h4>
			</div>
		)
	}
}