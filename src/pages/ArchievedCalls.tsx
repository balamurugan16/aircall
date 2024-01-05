import { Box, Button, styled } from "@mui/material";
import { Call } from "../components";
import { useArchieveAllCallsMutation, useGetActivitiesQuery } from "../lib/api";
import { useState } from "react";
import ConfirmationDialog from "../components/ConfirmationDialog";

function ArchievedCalls() {
	const { data } = useGetActivitiesQuery();
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
			{data
				?.filter(({ is_archived }) => is_archived)
				?.map((call) => (
					<Call key={call.id} {...call} />
				))}
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
	gap: 0.5rem;
`;

export default ArchievedCalls;
