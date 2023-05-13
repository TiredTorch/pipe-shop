export const cartContainerStyles = {
	header: {
		background: "#EEEEEE",
		borderBottom: "1px solid #BBBBBB",
		height: "5vh",
	},
	headerToggle: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		padding: "0 2vw",
	},
	headerText: {
		display: "flex",
		justifyContent: "flex-end",
		padding: "0 2vw",
		alignItems: "center",
		fontFamily: "Signika",
		fontSize: "calc(2.5vmin + 15px)"
	},
	body: {
		height: "calc(100% - 5vh)"

	},
	bodyFilter: {
		background: "#EEEEEE",
		borderRight: "1px solid #BBBBBB",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between"
	},
	bodyFilterTitle: {
		fontFamily: "Signika",
		fontSize: "calc(1.8vmin + 10px)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "2vh"
	},
	bodyContent: {
		padding: "20px",
		display: "flex",
		gap: "30px 0px",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
		maxHeight: "calc(100%)",
		overflowY: "auto",
		flexDirection: "row",
		alignContent: "flex-start"
	},
	checkboxGroup: {
		display: "flex",
		flexDirection: "column",
		fontStyle: "italic"
	},
	applyButton: {
		width: "100%",
		margin: "2vmin",
		fontFamily: "Signika",
		fontSize: "calc(2vmin + 10px)",
		height: "auto"
	},
	divider: {
		fontFamily: "Signika",
		fontSize: "calc(1vmin + 10px)",
	}
}
