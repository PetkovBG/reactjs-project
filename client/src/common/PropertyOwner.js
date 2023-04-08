import { Navigate, Outlet, useParams } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import { usePropertyContext } from '../contexts/PropertyContext'

export const PropertyOwner = () => {

    const { propertyId } = useParams();
    console.log(propertyId);
    const { getProperty } = usePropertyContext();
    const { userId } = useAuthContext();
    
    const currentProperty = getProperty(propertyId);
    console.log(currentProperty);

    if (currentProperty && currentProperty._ownerId !== userId) {
        console.log('Goes to Navigate');
        return <Navigate to={`/catalog/${propertyId}`} replace />
    }

    return <Outlet />

}