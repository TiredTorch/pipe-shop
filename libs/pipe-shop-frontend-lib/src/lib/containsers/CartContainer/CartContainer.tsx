import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, Button } from "antd"
import { ShoppingOutlined } from "@ant-design/icons"
import { cartContainerStyles } from "./cartContainer.styles";
import { AppRouteEnum } from "../../types";
import { CSSProperties, useEffect } from "react";
import CartContainerItem from "./CartContainerItem/CartContainerItem";
import { useGetUsersBasketQuery, useRemoveFromBasketMutation } from "../../redux/api";
import { useTypedDispatch, useTypedSelector } from "../../redux";
import { setIsLoadingSite } from "../../redux/slices";
import { getDataById } from "../../utils/getDataById";

export const CartContainer = () => {
  const params = useParams();
  const dispatch = useTypedDispatch()
  const userEmail = useTypedSelector((state) => state.userSlice.userInfo?.email)
  const navigate = useNavigate()

  const {
    data: basket,
    isLoading,
    refetch
  } = useGetUsersBasketQuery(userEmail ?? "")

  const [removeFromBasket, {
    isLoading: isRemovingFromBasket,
  }] = useRemoveFromBasketMutation()

  console.log('basket', basket)

  useEffect(() => {
    console.log('isRemovingFromBasket', isRemovingFromBasket)
    dispatch(setIsLoadingSite(isLoading || isRemovingFromBasket))
  }, [isLoading, basket, dispatch, isRemovingFromBasket])

  useEffect(() => {
    if (isRemovingFromBasket) refetch()
  }, [isRemovingFromBasket, refetch])

  console.log('Params', params["productId"])
  return (
    <>
      <Row
        style={cartContainerStyles.header}
      >
        <Col
          span={3}
          style={cartContainerStyles.headerToggle}
        >
          <Button
            type="text"
            icon={<ShoppingOutlined />}
            onClick={() => navigate(AppRouteEnum.PRODUCTS)}
          />
        </Col>
        <Col
          span={21}
          style={cartContainerStyles.headerText}
        >
          Cart
        </Col>
      </Row>
      <Row
        style={cartContainerStyles.body}>

        <Col
          span={24}
          style={cartContainerStyles.bodyContent as CSSProperties}
        >
          {(basket as any)?.items.map((item: any, i: number) => (
            <CartContainerItem
              title={item.title}
              image={getDataById(item.id).image}
              onRemove={() => removeFromBasket({
                email: userEmail,
                pipeId: item.id
              })}
            />
          ))}
        </Col>
      </Row>
    </>
  )
}

export default CartContainer
