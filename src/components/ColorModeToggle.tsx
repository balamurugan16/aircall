import { IconButton, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch } from "../store";
import { toggleColorMode } from "../store/theme.slice";

const ColorModeToggle = () => {
	const theme = useTheme();
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(toggleColorMode());
	};

	return (
		<IconButton onClick={onClick} color="inherit">
			{theme.palette.mode === "dark" ? (
				<Brightness7Icon />
			) : (
				<Brightness4Icon />
			)}
		</IconButton>
	);
};

export default ColorModeToggle;
