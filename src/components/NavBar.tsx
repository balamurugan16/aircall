import { Link } from "react-router-dom";
import ArchiveIcon from "@mui/icons-material/Archive";
import RestoreIcon from "@mui/icons-material/Restore";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useState } from "react";

function NavBar() {
	const [value, setValue] = useState(0);

	return (
		<Paper
			sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
			elevation={3}
		>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(_event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction
					component={Link}
					to="/"
					label="Recents"
					icon={<RestoreIcon />}
				/>
				<BottomNavigationAction
					component={Link}
					to="/archieve"
					label="Archive"
					icon={<ArchiveIcon />}
				/>
			</BottomNavigation>
		</Paper>
	);
}

export default NavBar;
