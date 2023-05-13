import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const pipeService = createApi({
	reducerPath: "pipeService",
	baseQuery: axiosBaseQuery(),
	endpoints: (builder) => ({
		getPipes: builder.query<Record<string, any>, void>({
			query: () => {
				return {
					url: "/pipes",
					method: "GET"
				};
			}
		}),
		findPipe: builder.query<Record<string, any>, string>({
			query: (pipeId) => {
				return {
					url: `/pipes/${pipeId}`,
					method: "GET"
				};
			}
		}),
	})
});

export const {
	getPipes,
	findPipe
} = pipeService.endpoints;
export const {
	useGetPipesQuery,
	useFindPipeQuery
} = pipeService;
