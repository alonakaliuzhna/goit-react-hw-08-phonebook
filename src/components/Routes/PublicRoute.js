
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";

export default function PublicRoute({children,restricted=false}){
    const isLoggedIn= useSelector(authSelectors.getIsLoggedIn);
 const shouldRedirect =isLoggedIn && restricted;
 console.log(shouldRedirect)
 return <> {shouldRedirect ? <Navigate to="/contacts"/> :  children} </>
};