import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	styled,
	Box,
	IconButton,
} from "@mui/material";
import { Call } from "../lib/types";
import CallIcon from "./CallIcon";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useArchieveCallMutation } from "../lib/api";

const CallCard = (call: Call) => {
	const [archiveCall] = useArchieveCallMutation();

	return (
		<Accordion>
			<AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
				<Summary>
					<CallIcon type={call.call_type} direction={call.direction} />
					<div>
						<Typography>{call.from}</Typography>
					</div>
					<Typography className="time">12.25</Typography>
				</Summary>
			</AccordionSummary>
			<AccordionDetails>
				<Details>
					<Typography>Incoming 1m2s</Typography>
					<IconButton
						onClick={() =>
							archiveCall({
								is_archived: true,
								id: call.id,
							})
						}
					>
						<ArchiveIcon />
					</IconButton>
				</Details>
			</AccordionDetails>
		</Accordion>
	);
};

const Details = styled(Box)``;

const Summary = styled(Box)`
	width: 100%;
	display: grid;
	grid-template-columns: 36px 1fr 100px;
	align-items: center;

	.time {
		justify-self: end;
	}

	svg {
		font-size: 16px;
	}
`;

export default CallCard;
