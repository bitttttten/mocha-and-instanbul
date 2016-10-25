import React, { Component } from 'react'

export default class Main extends Component {

	constructor(props) {
		super(props)
		this.state = {
			counter: 0
		}
	}

	render() {
		const { title = 'Hello' } = this.props
		const { counter } = this.state
		return (
			<div>
				<h1>{title}</h1>
				<p>{counter}</p>
				<a id='increase' onClick={() => this.state.counter++ }>+</a>
				<a id='decrease' onClick={() => this.state.counter-- }>-</a>
			</div>
		)
	}
}

Main.propTypes = {
	title: React.PropTypes.string
}
