import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contacts from '../Components/Contacts';
import '../css/Home.css';
const Home = props => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		async function getContacts() {
			let contacts = await fetch('/getAll?table=contacts');
			let val = await contacts.json();
			console.log(val);
			setContacts(val);
		}
		getContacts();
	}, []);

	function fillTable() {
		return contacts.map((contact, index) => {
			if (contact === null) {
				console.log('hola');
			} else {
				return (
					<tr key={index} className='table-body'>
						<th scope='row'>{index}</th>
						<td>{contact.name}</td>
						<td>{contact.lastname}</td>
						<td>{contact.email}</td>
						<td>
							<button className='btn btn-warning'>Update</button>
						</td>
						<td>
							<button className='btn btn-danger'>Delete</button>
						</td>
					</tr>
				);
			}
		});
	}
	return (
		<div id='home'>
			<div id='header'>
				<h3>Lista de Contactos</h3>
				<Link to={{ pathname: '/contact' }} className='btn btn-success'>
					Crear Contacto
				</Link>
			</div>
			<div className='contact-table'>{<Contacts fill={fillTable} />}</div>
		</div>
	);
};
export default Home;
