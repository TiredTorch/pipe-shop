import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const basketService = createApi({
	reducerPath: "basketService",
	baseQuery: axiosBaseQuery(),
	tagTypes: ["basket"],
	endpoints: (builder) => ({
		getUsersBasket: builder.query<Record<string, unknown>, string>({
			query: (email) => {
				return {
					url: `/baskets/${email}`,
					method: "GET",
				};
			},
			providesTags: ["basket"]
		}),
		addToBasket: builder.mutation<void, Record<string, unknown>>({
			query: (data) => {
				return {
					url: `/baskets`,
					method: "POST",
					data
				}
			},
			invalidatesTags: ["basket"]
		}),
		removeFromBasket: builder.mutation<void, Record<string, unknown>>({
			query: (data) => {
				return {
					url: `/baskets`,
					method: "DELETE",
					data
				}
			},
			invalidatesTags: ["basket"]
		})
	})
});

export const {
	getUsersBasket,
	addToBasket,
	removeFromBasket
} = basketService.endpoints;
export const {
	useGetUsersBasketQuery,
	useAddToBasketMutation,
	useRemoveFromBasketMutation
} = basketService;
