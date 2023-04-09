import { Navigate, Outlet, useParams } from 'react-router-dom'
import { useAuthContext } from '../contexts/authContext'
import { usePropertyContext } from '../contexts/PropertyContext'

export const PropertyOwner = () => {

    const { propertyId } = useParams();
    const { getProperty } = usePropertyContext();
    const { userId } = useAuthContext();

    const currentProperty = getProperty(propertyId);

    if (currentProperty && currentProperty._ownerId !== userId) {
        return <Navigate to={`/catalog/${propertyId}`} replace />
    }

    return <Outlet />

}