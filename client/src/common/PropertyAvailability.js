import { usePropertyContext } from "../contexts/PropertyContext";
import { Navigate, Outlet, useParams } from "react-router-dom";

export const PropertyAvailability = () => {

    const { getProperty } = usePropertyContext();
    const { propertyId } = useParams();
    console.log("id", propertyId);
    const currentProperty = getProperty(propertyId);
    console.log("Current property", currentProperty);
    if (!currentProperty) {
        return <Navigate to={"/404"} />
    }

    return <Outlet />
}