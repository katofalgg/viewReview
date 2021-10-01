import {useContext} from "react";
import {Redirect} from "react-router-dom";
import {AuthContext, AuthContextType} from "./Auth";
import {
    BrowserRouter as Router,
    Route,
    RouteComponentProps,
    RouteChildrenProps,
} from "react-router-dom";
import * as H from 'history';

export interface IPrivateRouteProps {
    location?: H.Location;
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    render?: (props: RouteComponentProps<any>) => React.ReactNode;
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
    path?: string | string[];
    exact?: boolean;
    sensitive?: boolean;
    strict?: boolean;
}
const PrivateRoute: React.FC<IPrivateRouteProps> = ({component: RouteComponent, ...rest}) => {
    const {currentUser}: AuthContextType = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={"/login"}/>
                )
            }
        />
    );
};


export default PrivateRoute
