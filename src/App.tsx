import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { store } from "./lib/store";
import { NavBar } from "./components";
import ArchievedCalls from "./pages/ArchievedCalls";
import AllCalls from "./pages/AllCalls";

function App() {
	return (
		<Provider store={store}>
			<div className="container">
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<AllCalls />} />
						<Route path="/archieve" element={<ArchievedCalls />} />
					</Routes>
					<NavBar />
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
