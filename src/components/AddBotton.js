import React, {Component} from 'react';

export default class AddBotton extends Component {
	render () {
		const {addOne, deOne} = this.props;
		return (
			<div>
				<button onClick={addOne}> + </button>
				<button onClick={deOne}> - </button>
			</div>
		)
	}
}