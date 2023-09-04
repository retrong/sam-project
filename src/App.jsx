import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/organisms/Navbar';
import { About, CharacterDesign, Error, LandingPage } from './component/pages';

function App() {
    // const router = createBrowserRouter(
	// 		createRoutesFromElements(
	// 			<Route errorElement={<Error />}>
    //                 <Route exact element={<Navbar/>}></Route>
	// 				<Route path="/" element={<LandingPage />}></Route>
	// 			</Route>
	// 		)
	// );

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
			<Route path="/" element={<LandingPage />}></Route>
            <Route path='*' element={<Error/>}></Route>
			<Route path="/cd" element={<CharacterDesign />}></Route>
			<Route path="/about" element={<About />}></Route>

        </Routes>
      
    </BrowserRouter>
  )
}

export default App
