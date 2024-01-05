import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { store } from "./lib/store";
import { NavBar } from "./components";
import ArchievedCalls from "./pages/ArchievedCalls";
import AllCalls from "./pages/AllCalls";
import { CssBaseline } from "@mui/material";

function App() {
	return (
		<Provider store={store}>
			<CssBaseline />
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
