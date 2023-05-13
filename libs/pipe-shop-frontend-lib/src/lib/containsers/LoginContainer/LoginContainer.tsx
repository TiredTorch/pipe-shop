import { CSSProperties, Fragment, useEffect, useState } from "react"
import { Formik } from "formik"
import { Space, Button, Input, Typography } from "antd"
import { loginSchema } from "./LoginPage.schema"
import { getFormStructure } from "../../utils/getFormStructure"
import { loginContainerStyles } from "./LoginContainer.styles"
import { useNavigate } from "react-router-dom"
import { AppRouteEnum } from "../../types"
import { useTypedDispatch } from "../../redux"
import { addUserInfo, setIsLoadingSite } from "../../redux/slices"
import { useGetUserByEmailQuery } from "../../redux/api"

export const LoginContainer = () => {
  const navigate = useNavigate()
  const dispatch = useTypedDispatch();
  const { logInStructure } = getFormStructure();
  const [email, setEmail] = useState<string | null>()
  const [password, setPassword] = useState<string | null>()

  const {
    isLoading,
    isSuccess,
    isError,
    data
  } = useGetUserByEmailQuery(email ?? "", {
    skip: !email
  })

  useEffect(() => {
    dispatch(setIsLoadingSite(isLoading))
  }, [isLoading, data, dispatch])

  useEffect(() => {
    if (isError) {
      setEmail(null)
      setPassword(null)
    }

    if (isLoading || !isSuccess) return;
    console.log('true data', data)

    if (!data) {
      alert("No user founded")
    }


    if (data && data.password !== password) {
      alert("Wrong password")
    }

    if (data && data.password === password) {
      dispatch(addUserInfo(data))
      console.log('worked')
    }

    setEmail(null)
    setPassword(null)

  }, [isLoading, data, isSuccess, isError, password, dispatch])


  const onSubmit = (values: { email: string, password: string }) => {
    console.log('values', values)
    setEmail(values.email)
    setPassword(values.password)

  }

  return (
    <Space
      style={loginContainerStyles.root as CSSProperties}
    >
      <Typography.Title>Log in</Typography.Title>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={loginSchema}
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
              style={loginContainerStyles.formWrapper}
            >
              {logInStructure.map((item) => (
                <Fragment
                  key={item.name}
                >
                  <Input
                    style={loginContainerStyles.input as CSSProperties}
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
                style={loginContainerStyles.input as CSSProperties}
                htmlType="submit"
              >
                Log In
              </Button>
              <Button
                style={loginContainerStyles.input as CSSProperties}
                onClick={() => navigate(AppRouteEnum.REGISTER)}
              >
                Register one
              </Button>
            </Space>
          </form>
        )}
      </Formik>
    </Space>
  )
}

export default LoginContainer
