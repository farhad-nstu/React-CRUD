import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Listing from './Listing';
import Add from './Add';
import Edit from './Edit';



class Index extends Component {

	render() {
		return (
			<div>
						<Link to='/category' className="btn btn-sm btn-primary m-2">Listing</Link>
						<Link to='/category/add' className="btn btn-sm btn-primary">Add</Link>

						<Route exact path="/category" component={Listing} />
						<Route exact path="/category/add" component={Add} />
						<Route exact path="/category/edit/:id" component={Edit} />
			</div>
		);
	}
}

export default Index;

