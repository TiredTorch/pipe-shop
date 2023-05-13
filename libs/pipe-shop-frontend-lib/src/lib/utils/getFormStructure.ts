
const email = {
	label: "emailFieldLabel",
	name: "email",
	id: "email",
	type: "text",
	placeholder: "",
};

const password = {
	label: "passwordFieldLabel",
	name: "password",
	id: "password",
	type: "password",
	placeholder: "",
};

const confirmPassword = {
	...password,
	label: "confirmPasswordFieldLabel",
	name: "confirmPassword",
};

export const getFormStructure = () => {
	const signUpStructure = [email, password, confirmPassword];
	const logInStructure = [email, password];

	return { signUpStructure, logInStructure };
};
