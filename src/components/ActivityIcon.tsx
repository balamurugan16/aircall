import MissedCallIcon from "@mui/icons-material/PhoneMissed";
import VoiceMailIcon from "@mui/icons-material/Voicemail";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";

import { Call } from "../lib/types";

type Props = {
	type: Call["call_type"];
	direction: Call["direction"];
};

export default function ActivityIcon(props: Props) {
	if (props.type === "missed") {
		return <MissedCallIcon color="error" />;
	} else if (props.type === "voicemail") {
		return <VoiceMailIcon color="info" />;
	} else if (props.type === "answered") {
		if (props.direction === "inbound") {
			return <CallReceivedIcon />;
		}
		if (props.direction === "outbound") {
			return <CallMadeIcon />;
		}
	} else {
		return <CallMadeIcon />;
	}
}
