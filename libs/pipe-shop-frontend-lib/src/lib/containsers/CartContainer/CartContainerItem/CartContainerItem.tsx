import { FC } from "react"
import { Card, Button, Image } from "antd"
import { CartContainerItemProps } from "./CartContainerItem.types"
import { CloseCircleOutlined } from "@ant-design/icons"
import { cartContainerItemStyles } from "./CartContainerItem.styles"

export const CartContainerItem: FC<CartContainerItemProps> = ({
	title,
	image,
	onRemove
}) => {
	return (
		<Card
			style={cartContainerItemStyles.root}
			title={title}
			extra={
				<Button
					icon={<CloseCircleOutlined />}
					onClick={onRemove}
				/>
			}
		>
			<Image
				style={cartContainerItemStyles.image}
				src={image}
				preview={false}
			/>
		</Card>
	)
}

export default CartContainerItem
