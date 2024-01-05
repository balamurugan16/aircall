import { Paper, styled } from "@mui/material";

const Header = () => {
	return (
		<Wrapper
			sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}
			elevation={3}
		>
			<img src="/logo.svg" alt="logo" width={96} />
		</Wrapper>
	);
};

const Wrapper = styled(Paper)`
	height: 40px;
	margin: 0 auto;
	padding: 20px 0;
	text-align: center;
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);

	svg {
		display: block;
		width: 100%;
		height: 100%;
	}
`;

export default Header;
