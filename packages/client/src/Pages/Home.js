import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contacts from '../Components/Contacts';
import '../css/Home.css';
const Home = props => {
	const [contacts, setContacts] = useState([]);
	const [ElemCount, setElemCount] = useState(0);

	useEffect(() => {
		async function getContacts() {
			try {
				let contacts = await fetch('/getAll?table=contacts');
				let val = await contacts.json();
				console.log(val);
				setContacts(val);
			} catch (error) {
				setContacts([]);
			}
		}
		getContacts();
		setElemCount(0);
	}, []);

	async function deleteEntry(e, id) {
		let x = window.confirm('Are you sure you want to delete the entry?');
		if (x) {
			await fetch(`/delete?table=contacts&id=${id}`, {
				method: 'DELETE',
			});
			alert('Deleted Succesfully');
			window.location.reload();
		}
	}
	function fillTable() {
		console.log(contacts);
		console.log(contacts.length);
		console.log(contacts.children);
		if (contacts.length === undefined) {
			return (
				<tr className='table-body'>
					<th scope='row'>1</th>
					<td>{contacts.children.name}</td>
					<td>{contacts.info.lastname}</td>
					<td>{contacts.info.email}</td>
					<td>
						<Link
							to={{
								pathname: '/contact',
								state: {
									id: 1,
								},
							}}
							className='btn btn-warning'>
							Update
						</Link>
					</td>
					<td>
						<button onClick={e => deleteEntry(e, 1)} className='btn btn-danger'>
							Delete
						</button>
					</td>
				</tr>
			);
		} else {
			return contacts.map((contact, index) => {
				if (contact === null) {
					console.log('hola');
				} else {
					return (
						<tr key={index} className='table-body'>
							<th scope='row'>{index}</th>
							<td>{contact.info.name}</td>
							<td>{contact.info.lastname}</td>
							<td>{contact.info.email}</td>
							<td>
								<Link
									to={{
										pathname: '/contact',
										state: {
											id: index,
										},
									}}
									className='btn btn-warning'>
									Update
								</Link>
							</td>
							<td>
								<button onClick={e => deleteEntry(e, index)} className='btn btn-danger'>
									Delete
								</button>
							</td>
						</tr>
					);
				}
			});
		}
	}
	return (
		<div id='home'>
			<div id='header'>
				<h3>Lista de Contactos</h3>
				<Link
					to={{
						pathname: '/contact',
						state: {
							id: contacts.length === 0 ? contacts.length + 1 : contacts.length,
						},
					}}
					className='btn btn-success'>
					Crear Contacto
				</Link>
			</div>
			<div className='contact-table'>{<Contacts fill={fillTable} />}</div>
		</div>
	);
};
export default Home;
