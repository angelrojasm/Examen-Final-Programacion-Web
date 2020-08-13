import React, { useState } from 'react';
import '../css/ContactForm.css';
import { Link, useHistory } from 'react-router-dom';

const SignUp = props => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [lastName, setLastName] = useState('');
	const history = useHistory();

	const clear = () => {
		setName('');
		setLastName('');
		setEmail('');
	};
	async function handleSubmit() {
		if (name === '') {
			alert('Your name must not be empty!');
		} else if (email === '') {
			alert('Your email must not be empty!');
		} else if (lastName === '') {
			alert('Your lastName must not be empty!');
		} else {
			await fetch(
				`/add?table=contacts&id=${props.location.state.id}&name=${name}&email=${email}&lastname=${lastName}`,
				{
					method: 'POST',
				}
			);
			alert('Contact Created!');
			history.push('/');
		}
	}
	return (
		<div id='contact-component'>
			<div id='contact-form-container'>
				<h3 id='form-title'>Create Contact</h3>
				<div className='contact-form-group'>
					<label htmlFor='Name'>What's your first name?</label>
					<input
						type='text'
						name='First Name'
						className='form-control'
						aria-describedby='emailHelp'
						required
						value={name}
						onChange={e => {
							e.preventDefault();
							setName(e.target.value);
						}}
					/>
				</div>
				<div className='contact-form-group'>
					<label htmlFor='exampleInputEmail1'>Email address</label>
					<input
						type='email'
						className='form-control'
						aria-describedby='emailHelp'
						required
						name='email'
						value={email}
						onChange={e => {
							e.preventDefault();
							setEmail(e.target.value);
						}}
					/>
					<small id='emailHelp' className='form-text text-muted'>
						We'll never share your email with anyone else.
					</small>
				</div>
				<div className='contact-form-group'>
					<label htmlFor='exampleInputlastName1'>What's your Last Name?</label>
					<input
						type='lastName'
						className='form-control'
						required
						value={lastName}
						onChange={e => {
							e.preventDefault();
							setLastName(e.target.value);
						}}
					/>
				</div>
				<div id='buttons'>
					<Link to={{ pathname: '/' }} className='btn btn-warning'>
						Cancel
					</Link>
					<button className='btn btn-primary' onClick={handleSubmit}>
						Save
					</button>
					<button
						className='btn btn-danger'
						onClick={e => {
							e.preventDefault();
							clear();
						}}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
