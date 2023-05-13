import { CSSProperties, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Row, Col, Button, Divider, Slider, Checkbox } from "antd"
import { MenuOutlined, UserOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { productsContainerStyles } from "./ProductsContainer.styles"
import ProductItem from "./ProductItem/ProductItem"
import { AppRouteEnum } from "../../types"
import { useGetPipesQuery } from "../../redux/api"
import { useTypedDispatch } from "../../redux"
import { setIsLoadingSite } from "../../redux/slices"

export const ProductsContainer = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate()

  const [isFiltersOpened, setIsFiltersOpened] = useState(true)
  const [filters, setFilters] = useState<{
    price: [number, number],
    tags: unknown[]
  }>({
    price: [0, 1000],
    tags: []
  })

  const {
    isLoading,
    isSuccess,
    isError,
    data
  } = useGetPipesQuery()

  console.log('data', data)

  useEffect(() => {
    dispatch(setIsLoadingSite(isLoading))
  }, [isLoading, data, dispatch])

  return (
    <>
      <Row
        style={productsContainerStyles.header}
      >

        <Col
          span={3}
          style={productsContainerStyles.headerToggle}
        >
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setIsFiltersOpened(prev => !prev)}
          />
        </Col>
        <Col
          span={3}
          style={productsContainerStyles.headerToggle}
        >
          <Button
            type="text"
            icon={<UserOutlined />}
            onClick={() => navigate(AppRouteEnum.PROFILE)}
          />
        </Col>
        <Col
          span={3}
          style={productsContainerStyles.headerToggle}
        >
          <Button
            type="text"
            icon={<ShoppingCartOutlined />}
            onClick={() => navigate(AppRouteEnum.CART)}
          />
        </Col>
        <Col
          span={15}
          style={productsContainerStyles.headerText}
        >
          Pipes
        </Col>
      </Row>
      <Row
        style={productsContainerStyles.body}>
        {isFiltersOpened &&
          <Col
            span={isFiltersOpened ? 6 : 0}
            style={productsContainerStyles.bodyFilter as CSSProperties}
          >
            <Col>
              <Row
                style={productsContainerStyles.bodyFilterTitle}
              >Filters</Row>
              <Row>
                <Divider
                  style={productsContainerStyles.divider}
                  orientation="left"
                >
                  Price
                </Divider>
                <Slider
                  range={{ draggableTrack: true }}
                  min={0}
                  max={1000}
                  defaultValue={filters.price}
                  onChange={
                    (newValue: [number, number]) => setFilters(prev => ({
                      ...prev,
                      price: newValue
                    }))
                  }
                  style={{
                    width: "90%",
                    marginLeft: "5%"
                  }}
                />
              </Row>
              <Row>
                <Divider
                  style={productsContainerStyles.divider}
                  orientation="left"
                >
                  Tags
                </Divider>
                <Checkbox.Group
                  options={["Metal", "Organic", "Fragile", "Stone", "Rubber", "Danger"]}
                  onChange={
                    (newValue: unknown[]) => setFilters(prev => ({
                      ...prev,
                      tags: newValue
                    }))
                  }
                  style={productsContainerStyles.checkboxGroup as CSSProperties}
                />
              </Row>
            </Col>
            <Col>
              <Row>
                <Button
                  style={productsContainerStyles.applyButton}
                >Apply</Button>
              </Row>
            </Col>
          </Col>
        }
        <Col
          span={isFiltersOpened ? 18 : 24}
          style={productsContainerStyles.bodyContent as CSSProperties}
        >
          {data
            ?.filter((item: any) =>
              filters.tags.length > 0 ?
                filters.tags.some(filter => item.tags.includes(filter as string)) && item.cost > filters.price[0] && item.cost < filters.price[1] :
                item.cost > filters.price[0] && item.cost < filters.price[1]
            )
            .map((item: any, i: number) => (
              <ProductItem
                key={i}
                link={`/product/${item._id}`}
                title={item.name}
                price={item.cost}
                id={item._id}
              />
            ))}
        </Col>
      </Row>
    </>
  )
}

export default ProductsContainer
