export const pageLayoutStyles = {
	root: {
		background: "#020202",
		width: "100vw",
		height: "100vh",
		maxWidth: "100vw",
		maxHeight: "100vh",
		minWidth: "100vw",
		minHeight: "100vh",
		padding: "3vh 2vw"
	},
	container: (op: number) => ({
		background: `rgba(221, 221, 221, ${op})`,
		width: "100%",
		height: "100%",
		border: "1px solid #BBBBBB",
		boxShadow: "0px 0px 36px -20px rgba(0,0,0,0.75)"
	}),
	popover: {
		position: "absolute",
		background: "brown",
		width: "100vw",
		height: "100vh",
		top: 0,
		left: 0,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}
}
