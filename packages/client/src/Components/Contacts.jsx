import React, { useState, useEffect } from 'react';

export const Contacts = props => {
	function fillTable() {
		return props.fill();
	}
	return (
		<div id='table'>
			<table className='table table-striped table-bordered table-hover table-sm'>
				<thead>
					<tr>
						<th scope='col'>Number</th>
						<th scope='col'>First Name</th>
						<th scope='col'>Last Name</th>
						<th scope='col'>Email</th>
						<th scope='col'>Update</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody>{fillTable()}</tbody>
			</table>
		</div>
	);
};

export default Contacts;
