import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	renderField(field) {
		const {meta : {touched, error}} = field
		const className = `form-goup ${touched && error ? 'has-danger' : ''} `

		return(
			<div className = {className} >
				<label>{field.label}</label>
				<input className="form-control"
				type ="text"
					{...field.input}
				/>
				<div className = "text-help">
					{touched ? error : '' }
				</div>
			</div>
		);
	}

	onSubmit(values){
		// bind because it called ousite the component
		console.log(values);
	}

	render() {
		const  { handleSubmit } = this.props;

		return (
			<form onSubmit = { handleSubmit(this.onSubmit.bind(this)) } >
				<Field
					label = "Title for Post"
					name = "title"
					component = {this.renderField}
				/>
				<Field
					label = "Categories"
					name = "categories"
					component = {this.renderField}
				/>
				<Field
					label = "Post Content"
					name = "content"
					component = {this.renderField}
				/>
				<button type='submit' className="btn btn-primary">Submmit</button>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	// Validate the inputs from 'values'

	if (!values.title) {
		errors.title = 'Enter a title'
	}

	if (!values.categories) {
		errors.categories = 'Enter a categories'
	}

	if (!values.content) {
		errors.content = 'Enter a content'
	}

	// If error is empty, the form is fine to submit
	// If error has any properties, redux form assumes form is invalid

	return errors;

}

export default reduxForm({
	validate,
	form: 'PostsNewForm'	
})(PostsNew)