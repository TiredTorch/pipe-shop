import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { AxiosBaseQueryFn } from "./baseQuery.types";

export const configuration: AxiosRequestConfig = {
	baseURL: `http://localhost:4202`,
	headers: {
		"Accept": "*/*",
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*"
	},
	timeout: 45000,
	maxContentLength: 200000,
	validateStatus: (status: number) => status >= 200 && status < 300,
	maxRedirects: 5
};

const axiosInstance = axios.create(configuration);

export const axiosBaseQuery =
	({ baseUrl }: { baseUrl: string } = { baseUrl: "" }): AxiosBaseQueryFn =>
		async (
			{ url, method, data, ...rest }, { getState }
		) => {
			try {
				const { headers, ...restParams } = rest;
				const result = await axiosInstance({
					url: `${baseUrl}${url}`,
					method,
					data,
					headers: headers,
					...restParams
				});

				return { data: result.data };
			} catch (axiosError) {
				const error = axiosError as AxiosError;

				return {
					error: {
						status: error?.response?.status,
						data: error?.response?.data
					}
				};
			}
		};
