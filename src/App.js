import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Footer from "./components/Footer";
import CookieNotice from "./components/CookieNotice";
import DetailReceipe from "./pages/DetailReceipe";

function App() {
	useEffect(() => {
		console.log({
			name: "ALAPHIA Francis",
			email: "francisalaphia5@gmail.com",
			nickname: "Ciscodev",
			phone: "+228 98852436",
			github: "https://github.com/francis-tg",
		});
	}, []);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:receipe_id?" element={<DetailReceipe />} />
			</Routes>
			<CookieNotice />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
