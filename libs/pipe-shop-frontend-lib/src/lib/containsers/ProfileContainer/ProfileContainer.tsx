/* eslint-disable react/jsx-no-useless-fragment */
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Typography } from "antd"
import { ShoppingCartOutlined, ShoppingOutlined } from "@ant-design/icons"
import { profileContainerStyles } from "./ProfileContainer.styles";
import { AppRouteEnum } from "../../types";
import { CSSProperties } from "react";
import { RootState, useTypedDispatch, useTypedSelector } from "../../redux";
import { clearUserInfo } from "../../redux/slices";

export const ProfileContainer = () => {
  const navigate = useNavigate()
  const dispatch = useTypedDispatch();
  const user = useTypedSelector((store: RootState) => store.userSlice.userInfo)

  const handleLogOut = () => {
    dispatch(clearUserInfo())
  }

  return (
    <>
      {user && <>
        <Row
          style={profileContainerStyles.header}
        >
          <Col
            span={3}
            style={profileContainerStyles.headerToggle}
          >
            <Button
              type="text"
              icon={<ShoppingOutlined />}
              onClick={() => navigate(AppRouteEnum.PRODUCTS)} />
          </Col>
          <Col
            span={3}
            style={profileContainerStyles.headerToggle}
          >
            <Button
              type="text"
              icon={<ShoppingCartOutlined />}
              onClick={() => navigate(AppRouteEnum.CART)} />
          </Col>
          <Col
            span={18}
            style={profileContainerStyles.headerText}
          >
            Profile
          </Col>
        </Row><Row
          style={profileContainerStyles.body}>

          <Col
            span={24}
            style={profileContainerStyles.bodyContent as CSSProperties}
          >
            <Typography.Title>{user.email}</Typography.Title>
            <Typography.Text>Pipes purchased: 0</Typography.Text>
            <Button onClick={handleLogOut}>Log out</Button>
          </Col>
        </Row>
      </>
      }
    </>
  )
}

export default ProfileContainer
