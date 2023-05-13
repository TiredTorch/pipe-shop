import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PageLayout } from "../layouts";
import { RootState, useTypedSelector } from "../redux";
import { AppRouteEnum, RouteItem } from "../types";

export const PrivateRoute: FC<PropsWithChildren<RouteItem>> = ({
	children
}) => {
	const location = useLocation();
	const userInfo = useTypedSelector((state: RootState) => state.userSlice.userInfo)

	if (!userInfo) {
		return (
			<Navigate
				to={AppRouteEnum.LOGIN}
				state={{ from: location }}
				replace
			/>
		);
	}

	return (
		<PageLayout opacity={0.8}>{children}</PageLayout>
	);
};

export default PrivateRoute;
