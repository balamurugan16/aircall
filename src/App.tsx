import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { useSelector } from "./store";
import { NavBar } from "./components";
import ArchievedCalls from "./pages/ArchievedCalls";
import AllCalls from "./pages/AllCalls";
import {
	Box,
	createTheme,
	CssBaseline,
	styled,
	ThemeProvider,
} from "@mui/material";

function App() {
	const { mode } = useSelector((state) => state.theme);
	const theme = createTheme({
		palette: {
			mode,
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline />
				<Header />
				<Wrapper>
					<Routes>
						<Route path="/" element={<AllCalls />} />
						<Route path="/archieve" element={<ArchievedCalls />} />
					</Routes>
				</Wrapper>
				<NavBar />
			</BrowserRouter>
		</ThemeProvider>
	);
}

const Wrapper = styled(Box)`
	margin-top: 3rem;
`;

export default App;
