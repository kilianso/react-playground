import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
	render() {
		return (
			<div className="Panel">
				<h3 className="Panel-heading">{this.props.heading}</h3>
				<p className="Panel-content">{this.props.content}</p>
				<p className="Panel-content">{this.props.children}</p>
			</div>
		)
	}
}

export default Panel;
