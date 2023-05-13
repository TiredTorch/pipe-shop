import { Row, Col, Space, Spin } from "antd"
import { CSSProperties, FC, PropsWithChildren } from "react"
import { RootState, useTypedSelector } from "../../redux"
import { pageLayoutStyles } from "./PageLayout.styles"
import PipeModel from "./PipeModel/PipeModel"

export const PageLayout: FC<PropsWithChildren<{ opacity: number }>> = ({
	children,
	opacity
}) => {
	const isLoadingSite = useTypedSelector((state: RootState) => state.userSlice.isLoadingSite);
	const isLoadingModel = useTypedSelector((state: RootState) => state.userSlice.isLoadingModel);

	return (
		<Row
			style={pageLayoutStyles.root}
		>
			<PipeModel />
			<Col
				style={pageLayoutStyles.container(opacity)}
			>
				{children}
			</Col>
			{(isLoadingModel || isLoadingSite) &&
				<Space
					style={pageLayoutStyles.popover as CSSProperties}
				>
					<Spin />
				</Space>
			}
		</Row>
	)
}

export default PageLayout
