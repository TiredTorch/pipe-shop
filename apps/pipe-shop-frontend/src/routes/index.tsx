import { PrivateRoute, PublicRoute } from "@pipe-shop/pipe-shop-frontend-lib"
import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { commonRoutes } from "./commonRoutes"
import { privateRoutes } from "./privateRoutes"

export const AppRoutes = () => {
	return (
		<Suspense fallback={null}>
			<Routes>
				{[...privateRoutes, ...commonRoutes].map((route, index) => (
					<Route
						{...route}
						key={`r_${index}_${route.path}`}
						element={
							route.isAuth ? (
								<PrivateRoute>{route.element}</PrivateRoute>
							) : (
								<PublicRoute >
									{route.element}
								</PublicRoute>
							)
						}
					/>
				))}
			</Routes>
		</Suspense>
	)
}

export default AppRoutes
