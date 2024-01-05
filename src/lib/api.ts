import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArchiveRequest, Call } from "./types";

const BASE_URL = import.meta.env.VITE_API_URL;

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	tagTypes: ["Activity"],
	endpoints: (builder) => ({
		getActivities: builder.query<Call[], void>({
			query: () => `activities`,
			providesTags: ["Activity"],
		}),
		getActivity: builder.query<Call, Call["id"]>({
			query: (id) => `activities/${id}`,
		}),
		archieveCall: builder.mutation<string, ArchiveRequest & Pick<Call, "id">>({
			query: ({ id, ...body }) => ({
				url: `activities/${id}`,
				method: "PATCH",
				body,
			}),
			invalidatesTags: ["Activity"],
		}),
		archieveAllCalls: builder.mutation<string, void>({
			query: () => ({
				url: `reset`,
				method: "PATCH",
			}),
			invalidatesTags: ["Activity"],
		}),
	}),
});

export const {
	useGetActivitiesQuery,
	useGetActivityQuery,
	useArchieveCallMutation,
	useArchieveAllCallsMutation,
} = api;
