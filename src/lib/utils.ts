import { Call } from "./types";

export function formatDateTime(dateString: string): string {
	const formatter = new Intl.DateTimeFormat(undefined, {
		timeStyle: "short",
		hour12: true,
	});
	const date = new Date(dateString);
	return formatter.format(date);
}

export function formatRelativeDate(targetDate: Date) {
	const currentDate = new Date();

	// Check if the date is today
	if (
		targetDate.getDate() === currentDate.getDate() &&
		targetDate.getMonth() === currentDate.getMonth() &&
		targetDate.getFullYear() === currentDate.getFullYear()
	) {
		return "Today";
	}

	// Check if the date is yesterday
	const yesterday = new Date(currentDate);
	yesterday.setDate(currentDate.getDate() - 1);

	if (
		targetDate.getDate() === yesterday.getDate() &&
		targetDate.getMonth() === yesterday.getMonth() &&
		targetDate.getFullYear() === yesterday.getFullYear()
	) {
		return "Yesterday";
	}

	// Check if the date is tomorrow
	const tomorrow = new Date(currentDate);
	tomorrow.setDate(currentDate.getDate() + 1);

	if (
		targetDate.getDate() === tomorrow.getDate() &&
		targetDate.getMonth() === tomorrow.getMonth() &&
		targetDate.getFullYear() === tomorrow.getFullYear()
	) {
		return "Tomorrow";
	}

	// For other dates, return the formatted date (e.g., 7th March 2022)
	const formatter = new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return formatter.format(targetDate);
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
