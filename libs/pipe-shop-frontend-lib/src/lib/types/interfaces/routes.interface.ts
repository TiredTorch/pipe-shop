import { RouteProps } from "react-router-dom"

export type RouteItem = RouteProps & {
	isAuth?: boolean
}

