import { useGetActivitiesQuery } from "../lib/api";
import { Call } from "../lib/types";
import { formatRelativeDate } from "../lib/utils";

export default function useActivies(type: "Archived" | "Unarchived") {
	let { data } = useGetActivitiesQuery();

	if (!data) return [];

	data = data
		.filter((call) => {
			const requiredProperties = [
				"id",
				"created_at",
				"direction",
				"from",
				"to",
				"via",
				"duration",
				"is_archived",
				"call_type",
			];

			return requiredProperties.every((property) =>
				// eslint-disable-next-line no-prototype-builtins
				call.hasOwnProperty(property),
			);
		})
		.filter(({ is_archived }) => {
			if (type === "Archived") {
				return is_archived;
			}
			return !is_archived;
		})
		.map((call) => {
			return {
				...call,
				dateObject: new Date(call.created_at),
			};
		});

	data.sort((a, b) => b.dateObject.getTime() - a.dateObject.getTime());

	const groupedCalls = data.reduce<{ [key: string]: Call[] }>(
		(groups, call) => {
			const dateKey = formatRelativeDate(call.dateObject);

			if (!groups[dateKey]) {
				groups[dateKey] = [];
			}

			groups[dateKey].push(call);

			return groups;
		},
		{},
	);

	return groupedCalls;
}
