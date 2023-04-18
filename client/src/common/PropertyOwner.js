import { Navigate, Outlet, useParams } from 'react-router-dom'
import { useAuthContext } from '../contexts/authContext'
import { usePropertyContext } from '../contexts/PropertyContext'

export const PropertyOwner = ({children}) => {

    const { propertyId } = useParams();
    const { getProperty } = usePropertyContext();
    const { userId } = useAuthContext();

    const currentProperty = getProperty(propertyId);

    console.log({
        currentProperty,
        userId
    });

    if (currentProperty && currentProperty._ownerId !== userId) {
        console.log('Navigate if');
        return <Navigate to={`/catalog/${propertyId}`} replace />
    }
    console.log('Outlet return');
    return children;

}