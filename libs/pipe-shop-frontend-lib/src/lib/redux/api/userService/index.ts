import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const userService = createApi({
	reducerPath: "userService",
	baseQuery: axiosBaseQuery(),
	tagTypes: ["userTag"],
	endpoints: (builder) => ({
		getUserByEmail: builder.query<{ email: string, password: string }, string>({
			query: (email) => {
				return {
					url: `/users/${email}`,
					method: "GET",
				};
			}
		}),
		addUser: builder.mutation<void, { email: string, password: string }>({
			query: (data) => {
				return {
					url: `/users`,
					method: "POST",
					data,
				};
			}
		})
	})
});

export const {
	getUserByEmail,
	addUser
} = userService.endpoints;
export const {
	useGetUserByEmailQuery,
	useAddUserMutation
} = userService;
