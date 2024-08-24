import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, role, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem('role') === role ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        }
    />
);

export default PrivateRoute;
