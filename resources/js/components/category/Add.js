import React, { Component } from 'react';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

class Add extends Component {

	constructor()
	{
		super();
		this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state={
			category_name: '',
			alert_message: ''
		}
	}

	onChangeCategoryName(e)
	{
		this.setState({category_name: e.target.value});
	}

	onSubmit(e)
	{
		e.preventDefault();
		const category = {
			category_name: this.state.category_name
		}

		axios.post('http://127.0.0.1:8000/api/category/store', category)
		.then(res=> {
			this.setState({alert_message:"success"})
		}).catch(error=> {
			this.setState({alert_message:"error"})
		});
	}

	render() {
		return (
			<div className="container">
			<hr />
			{this.state.alert_message=="success"?<SuccessAlert/>:null}
				{this.state.alert_message=="error"?<ErrorAlert/>:null}
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Category</label>
						<input type="text" 
							className="form-control" 
							id="exampleInputEmail1" 
							aria-describedby="emailHelp" 
							placeholder="Enter Category"
							value={this.state.category_name}
							onChange={this.onChangeCategoryName} 
						/>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

export default Add;

