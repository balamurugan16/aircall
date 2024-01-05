import { Box, Button, Typography, styled } from "@mui/material";
import { Call } from "../components";
import { useArchieveAllCallsMutation } from "../lib/api";
import { useState } from "react";
import ConfirmationDialog from "../components/ConfirmationDialog";
import useActivies from "../hooks/useActivities";

function ArchievedCalls() {
	const data = useActivies("Archived");
	const [archiveAllCalls] = useArchieveAllCallsMutation();
	const [open, setOpen] = useState(false);

	const handleClickListItem = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOk = () => {
		setOpen(false);
		archiveAllCalls();
	};

	return (
		<Wrapper>
			<Button
				onClick={() => {
					handleClickListItem();
				}}
			>
				Unarchive all calls
			</Button>
			{Object.entries(data).map(([date, calls]) => {
				return (
					<div className="call-group">
						<Typography className="day" variant="body2">
							{date}
						</Typography>
						{calls.map((call) => (
							<Call {...call} type="Archived" />
						))}
					</div>
				);
			})}
			<ConfirmationDialog
				open={open}
				keepMounted
				onCancel={handleClose}
				onOk={handleOk}
			/>
		</Wrapper>
	);
}

const Wrapper = styled(Box)`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	max-width: 40rem;
	margin: 0 auto;

	.call-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
`;

export default ArchievedCalls;
