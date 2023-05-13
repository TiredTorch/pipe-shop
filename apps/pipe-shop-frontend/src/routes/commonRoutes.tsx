import { AppRouteEnum, RouteItem } from "@pipe-shop/pipe-shop-frontend-lib"
import { lazy } from "react"

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"))
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"))

export const commonRoutes: Array<RouteItem> = [
	{
		element: <LoginPage />,
		path: AppRouteEnum.LOGIN,
		isAuth: false
	},
	{
		element: <RegisterPage />,
		path: AppRouteEnum.REGISTER,
		isAuth: false
	}
]
