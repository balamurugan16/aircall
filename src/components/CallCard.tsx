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
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import PhoneIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MessageIcon from "@mui/icons-material/Message";
import { useArchieveCallMutation, useUnArchieveCallMutation } from "../lib/api";
import { formatDateTime, formatDuration } from "../lib/utils";

type Props = {
	type: "Archived" | "Unarchived";
} & Call;

const CallCard = (props: Props) => {
	const [archiveCall] = useArchieveCallMutation();
	const [unArchiveCall] = useUnArchieveCallMutation();

	return (
		<StyledAccordion>
			<AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
				<Summary>
					<ActivityIcon type={props.call_type} direction={props.direction} />
					<div>
						<Typography>{props.from}</Typography>
					</div>
					<Typography className="time" variant="caption">
						{formatDateTime(props.created_at)}
					</Typography>
				</Summary>
			</AccordionSummary>
			<AccordionDetails>
				<Details>
					<Typography
						variant="body2"
						color={props.call_type === "missed" ? "error" : ""}
						className="duration"
					>
						{formatDuration(props)}
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
							onClick={() => {
								if (props.type === "Unarchived") archiveCall(props.id);
								else unArchiveCall(props.id);
							}}
						>
							{props.type === "Unarchived" ? (
								<ArchiveIcon />
							) : (
								<UnarchiveIcon />
							)}
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
