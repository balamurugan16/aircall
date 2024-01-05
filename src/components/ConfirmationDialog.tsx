import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

export interface ConfirmationDialogProps {
	keepMounted: boolean;
	open: boolean;
	onCancel: () => void;
	onOk: () => void;
}

export default function ConfirmationDialog(props: ConfirmationDialogProps) {
	const { onCancel, onOk, open, ...other } = props;

	return (
		<Dialog
			sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
			maxWidth="xs"
			open={open}
			{...other}
		>
			<DialogTitle>Are you sure?</DialogTitle>
			<DialogActions>
				<Button autoFocus onClick={onCancel}>
					Cancel
				</Button>
				<Button onClick={onOk}>Ok</Button>
			</DialogActions>
		</Dialog>
	);
}
