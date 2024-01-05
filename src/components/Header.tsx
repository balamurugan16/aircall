import { Paper, styled, useTheme } from "@mui/material";
import ColorModeToggle from "./ColorModeToggle";

const Header = () => {
	const {
		palette: { mode },
	} = useTheme();

	const src = mode === "dark" ? "logo-dark" : "logo-light";
	return (
		<Wrapper
			sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}
			elevation={3}
		>
			<img src={`/${src}.svg`} alt="logo" width={64} />
			<ColorModeToggle />
		</Wrapper>
	);
};

const Wrapper = styled(Paper)`
	height: 3rem;
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	padding: 0 1rem;
`;

export default Header;
