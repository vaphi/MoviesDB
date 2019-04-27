import React from 'react'

import Banner from '../components/Banner'

const DashboardPage = props => (
	<div>
		<h1>Dashboard</h1>
		<Banner  token={props.token}/>
	</div>
);

export default DashboardPage