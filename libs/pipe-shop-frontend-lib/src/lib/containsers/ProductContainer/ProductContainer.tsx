import { CSSProperties, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, Button, Typography, Image } from "antd"
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { productContainerStyles } from "./ProductContainer.styles";
import { AppRouteEnum } from "../../types";
import { useFindPipeQuery } from "../../redux/api/pipeService";
import { useTypedDispatch } from "../../redux";
import { setIsLoadingSite } from "../../redux/slices";
import { getDataById } from "../../utils/getDataById";


export const ProductContainer = () => {
  const params = useParams();
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  const { data, isLoading, refetch } = useFindPipeQuery(params.productId ?? "645e0bdf5560c906e74b37e1")
  const { image, audio } = getDataById(params.productId ?? "")

  useEffect(() => {
    dispatch(setIsLoadingSite(isLoading))
  }, [isLoading, data, dispatch])

  useEffect(() => {
    refetch()
  }, [refetch])

  console.log('data', data)
  console.log('params.productId', params.productId)

  return (
    <>
      {data && !isLoading &&
        <span>
          <Row
            style={productContainerStyles.header}
          >

            <Col
              span={3}
              style={productContainerStyles.headerToggle}
            >
              <Button
                type="text"
                icon={<ShoppingCartOutlined />}
                onClick={() => navigate(AppRouteEnum.CART)}
              />
            </Col>
            <Col
              span={3}
              style={productContainerStyles.headerToggle}
            >
              <Button
                type="text"
                icon={<UserOutlined />}
                onClick={() => navigate(AppRouteEnum.PROFILE)}
              />
            </Col>
            <Col
              span={18}
              style={productContainerStyles.headerText}
            >
              Product: {data.name}
            </Col>
          </Row>
          <Row
            style={productContainerStyles.bodyContent as CSSProperties}
          >

            <Col
              span={8}
              style={productContainerStyles.textCol as CSSProperties}
            >
              <Typography.Title
                style={productContainerStyles.titleText}
              >Parameters</Typography.Title>
              <Typography.Text
                style={productContainerStyles.charText}
              >Avarage sound duration (1 inch drop): {data.duration}s</Typography.Text>
              <Typography.Text
                style={productContainerStyles.charText}
              >Reverb: {data.reverb ? "Yes" : "No"}</Typography.Text>
              <Typography.Text
                style={productContainerStyles.charText}
              >Aftersound: {data.aftersound ? "Yes" : "No"}</Typography.Text>
              <Typography.Text
                style={productContainerStyles.charText}
              >Sound variability: {data.variability}/10</Typography.Text>
              <Typography.Text
                style={productContainerStyles.charText}
              >Cost (1m): {data.cost} UAH</Typography.Text>
            </Col>
            <Col
              span={16}
              style={productContainerStyles.imgCol as CSSProperties}
            >
              <Image
                src={image}
                style={productContainerStyles.image}
                preview={false}
              />
              <audio
                controls
                style={{
                  width: "100%"
                }}
              >
                <source src={audio} type="audio/mp3" />
              </audio>
            </Col>
          </Row>
        </span>
      }
      <span />
    </>
  )
}

export default ProductContainer
