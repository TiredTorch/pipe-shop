import { object, string } from "yup";

export const loginSchema = object().shape({
	email: string()
		.email("Value have to be email")
		.max(255)
		.required("Field cannot be empty"),
	password: string()
		.max(255)
		.required("Field cannot be empty")
});
