import { usePropertyContext } from "../contexts/PropertyContext";
import { Navigate, Outlet, useParams } from "react-router-dom";

export const PropertyAvailability = () => {

    const { getProperty } = usePropertyContext();
    const { propertyId } = useParams();

    const currentProperty = getProperty(propertyId);

    if (!currentProperty) {
        return <Navigate to={"/404"} />
    }

    return <Outlet />
}