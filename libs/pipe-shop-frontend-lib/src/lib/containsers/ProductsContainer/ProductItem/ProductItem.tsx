import { FC, useEffect } from "react"
import { Card, Image, Button } from "antd"
import { ProductItemProps } from "./ProductItem.types"
import { productItemStyles } from "./ProductItem.styles"
import { Link } from "react-router-dom"
import { getDataById } from "../../../utils/getDataById"
import { useAddToBasketMutation } from "../../../redux/api"
import { setIsLoadingSite } from "../../../redux/slices"
import { useTypedDispatch, useTypedSelector } from "../../../redux"

export const ProductItem: FC<ProductItemProps> = ({
	id,
	title,
	link,
	price
}) => {
	const dispatch = useTypedDispatch()
	const email = useTypedSelector((store) => store.userSlice.userInfo?.email)
	const { image } = getDataById(id)

	const [addToBasket, { isLoading }] = useAddToBasketMutation()

	useEffect(() => {
		dispatch(setIsLoadingSite(isLoading))
	}, [isLoading, dispatch])

	return (
		<Card
			title={
				<Link
					to={link}
					style={productItemStyles.text}
				>
					{title}
				</Link>
			}
			extra={
				<span
					style={productItemStyles.extraText}
				>
					UAH {price}
				</span>
			}
			style={productItemStyles.root}
		>
			<Image
				src={image}
			/>
			<Button
				onClick={() => addToBasket({email: email, pipe: { id, title, link }})}
				style={{
					width: "100%",
					marginTop: "20px",
					fontFamily: "Signika",
					fontSize: "calc(1vmin + 10px)",
					height: "auto"
				}}
			>
				Add to cart
			</Button>
		</Card>
	)
}

export default ProductItem
