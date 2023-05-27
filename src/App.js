import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import SignIn from './components/signin/SignIn';
import UserDashBoard from './components/userDashboard/UserDashBoard';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/userDashboard" element={<UserDashBoard />} />
				</Routes>
			</main>
		</React.Fragment>
	);
}

export default App;
