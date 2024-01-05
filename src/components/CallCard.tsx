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
import ActivityIcon from "./ActivityIcon";
import ArchiveIcon from "@mui/icons-material/Archive";
import PhoneIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MessageIcon from "@mui/icons-material/Message";
import { useArchieveCallMutation } from "../lib/api";
import { formatDateTime, formatDuration } from "../lib/utils";

const CallCard = (call: Call) => {
	const [archiveCall] = useArchieveCallMutation();

	return (
		<StyledAccordion>
			<AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
				<Summary>
					<ActivityIcon type={call.call_type} direction={call.direction} />
					<div>
						<Typography>{call.from}</Typography>
					</div>
					<Typography className="time" variant="caption">
						{formatDateTime(call.created_at)}
					</Typography>
				</Summary>
			</AccordionSummary>
			<AccordionDetails>
				<Details>
					<Typography
						variant="body2"
						color={call.call_type === "missed" ? "error" : ""}
						className="duration"
					>
						{formatDuration(call)}
					</Typography>
					<div className="buttons">
						<IconButton size="small" color="success">
							<PhoneIcon />
						</IconButton>
						<IconButton size="small" color="info">
							<MessageIcon />
						</IconButton>
						<IconButton size="small" color="success">
							<VideoCallIcon />
						</IconButton>
						<IconButton
							color="default"
							size="small"
							onClick={() =>
								archiveCall({
									is_archived: true,
									id: call.id,
								})
							}
						>
							<ArchiveIcon />
						</IconButton>
					</div>
				</Details>
			</AccordionDetails>
		</StyledAccordion>
	);
};

const StyledAccordion = styled(Accordion)`
	box-shadow: 1 1px 1 rgba(0, 0, 0, 0.1);
`;

const Details = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 0.5rem;

	.buttons {
		display: flex;
		align-items: center;
		gap: 2rem;

		& > :last-child {
			align-self: flex-end;
		}
	}
	.duration {
		font-weight: 500;
	}
`;

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
