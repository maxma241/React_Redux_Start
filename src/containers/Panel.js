import React, {Component} from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Show from '../components/Show';
import AddBotton from '../components/AddBotton';

import * as counterAction from '../actions/counterAction';

class Panel extends Component {
	constructor (props) {
		super(props);
	}
	render() {
		const {number, actions} = this.props;
		return (
			<div>
				<Show num={number}/>
				<AddBotton addOne={actions.incrementAction} deOne={actions.decrementAction}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		number: state.counterReducer.number
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(counterAction, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Panel)