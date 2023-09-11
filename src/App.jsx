import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/organisms/Footer';
import Navbar from './component/organisms/Navbar';
import { About, Error, LandingPage } from './component/pages';

function App() {
  return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="*" element={<Error />}></Route>
				{/* <Route path="/cd" element={<CharacterDesign />}></Route>
				<Route path="/animate" element={<AnimationPage />}></Route> */}
				<Route path="/about" element={<About />}></Route>
			</Routes>
            <Footer />
		</BrowserRouter>
	);
}

export default App
