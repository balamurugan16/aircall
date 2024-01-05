import { Call } from "./types";

export function formatDateTime(dateString: string): string {
	const formatter = new Intl.DateTimeFormat(undefined, {
		timeStyle: "short",
		hour12: true,
	});
	const date = new Date(dateString);
	return formatter.format(date);
}

export function formatDuration(call: Call): string {
	if (call.call_type === "missed") {
		return "Missed Call";
	}
	const seconds = call.duration;
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = seconds % 60;

	const formattedHours = hours > 0 ? `${hours}h` : "";
	const formattedMinutes = minutes > 0 ? `${minutes}m` : "";
	const formattedSeconds = remainingSeconds > 0 ? `${remainingSeconds}s` : "";

	const formattedDuration = `${formattedHours}${formattedMinutes}${formattedSeconds}`;

	const direction = call.direction === "inbound" ? "Incoming" : "Outgoing";

	return `${direction}, ${formattedDuration}`;
}
