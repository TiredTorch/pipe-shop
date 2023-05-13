import { AppRouteEnum, RouteItem } from "@pipe-shop/pipe-shop-frontend-lib"
import { lazy } from "react"

const ProductPage = lazy(() => import("../pages/ProductPage/ProductPage"))
const ProductsPage = lazy(() => import("../pages/ProductsPage/ProductsPage"))
const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"))
const CartPage = lazy(() => import("../pages/CartPage/CartPage"))

export const privateRoutes: Array<RouteItem> = [
	{
		element: <ProductPage />,
		path: AppRouteEnum.PRODUCT,
		isAuth: true
	},
	{
		element: <ProductsPage />,
		path: AppRouteEnum.PRODUCTS,
		isAuth: true
	},
	{
		element: <ProfilePage />,
		path: AppRouteEnum.PROFILE,
		isAuth: true
	},
	{
		element: <CartPage />,
		path: AppRouteEnum.CART,
		isAuth: true
	},
]
