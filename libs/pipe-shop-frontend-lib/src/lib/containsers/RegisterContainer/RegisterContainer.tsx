import { CSSProperties, Fragment, useEffect, useState } from "react"
import { Formik } from "formik"
import { Space, Button, Input, Typography } from "antd"
import { registerSchema } from "./RegisterPage.schema"
import { getFormStructure } from "../../utils/getFormStructure"
import { registerContainerStyles } from "./RegisterContainer.styles"
import { useNavigate } from "react-router-dom"
import { AppRouteEnum } from "../../types"
import { addUserInfo, setIsLoadingSite } from "../../redux/slices"
import { useTypedDispatch } from "../../redux"
import { useAddUserMutation } from "../../redux/api"
import axios from "axios"

export const RegisterContainer = () => {
  const navigate = useNavigate()
  const dispatch = useTypedDispatch();
  const { signUpStructure } = getFormStructure();

  const [curTempUser, setCurTempUser] = useState<Record<string, string>>()

  const [addUser, {
    isLoading: isLoadingAddUser,
    isSuccess: isSuccessAddUser
  }] = useAddUserMutation()

  useEffect(() => {
    dispatch(setIsLoadingSite(isLoadingAddUser))
    if (isLoadingAddUser) return

    if (isSuccessAddUser && curTempUser) {
      dispatch(addUserInfo({email: curTempUser.email}))

    }
  }, [dispatch, isSuccessAddUser, curTempUser, isLoadingAddUser])

  const onSubmit = (value: any) => {

    addUser({ email: value.email, password: value.password })
    setCurTempUser({ email: value.email, password: value.password })
  }


  return (
    <Space
      style={registerContainerStyles.root as CSSProperties}
    >
      <Typography.Title>Register</Typography.Title>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%"
            }}
          >
            <Space
              direction="vertical"
              style={registerContainerStyles.formWrapper}
            >
              {signUpStructure.map((item) => (
                <Fragment
                  key={item.name}
                >
                  <Input
                    style={registerContainerStyles.input as CSSProperties}
                    status={
                      (touched[item.name as keyof typeof touched] &&
                        Boolean(errors[item.name as keyof typeof errors])) ? "error" : ""
                    }
                    id={item.name}
                    placeholder={item.name}
                    type={item.type}
                    name={item.name}
                    value={values[item.name as keyof typeof values]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {touched[item.name as keyof typeof touched]
                    && errors[item.name as keyof typeof errors]
                    && (
                      errors[item.name as keyof typeof errors]
                    )
                  }
                </Fragment>
              ))}
              <Button
                style={registerContainerStyles.input as CSSProperties}
                htmlType="submit"
              >
                Sign up
              </Button>
              <Button
                style={registerContainerStyles.input as CSSProperties}
                onClick={() => navigate(AppRouteEnum.LOGIN)}
              >
                Or log in if you have one
              </Button>
            </Space>
          </form>
        )}
      </Formik>
    </Space>
  )
}

export default RegisterContainer
