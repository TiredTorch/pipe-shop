import { object, ref, string } from "yup";

export const registerSchema = object().shape({
	email: string()
		.email("Value has to be an email")
		.max(255)
		.required("Field cannot be empty"),
	password: string()
		.max(255)
		.required("Field cannot be empty"),
	confirmPassword: string()
		.max(255)
		.required("schemaRequiredCoField cannot be emptynfirmPassword")
		.oneOf([ref("password")], "Passwords have to be the same"),
});
