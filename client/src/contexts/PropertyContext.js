import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { propertyServiceFactory } from "../services/propertyService";


export const PropertyContext = createContext()

export const PropertyProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [properties, setProperties] = useState([]);

    const propertyService = propertyServiceFactory();

    useEffect(() => {
        propertyService.getAll()
            .then(result => {
                setProperties(result)
            })
    }, []);

    const getAllProperties =  () => {
         propertyService.getAll()
        .then(result => {
            setProperties(result);
        })
        .catch((err) => {
            console.log(err);
        }) 
    }


    const onCreateSubmit = async (data) => {
        const newProperty = await propertyService.create(data);

        setProperties(state => [...state, newProperty]);

        navigate('/catalog');
    };

    const onPropertyEditSubmit = async (values) => {
        const result = await propertyService.edit(values._id, values);
        setProperties(state => state.map(x => x._id === values._id ? result : x));
        navigate(`/catalog/${values._id}`);
    };

    const getProperty = (propertyId) => {
        console.log('getProperty', properties);
        return properties.find(x => x._id === propertyId);
    }

    const deleteProperty = (propertyId) => {

        setProperties(state => state.filter(x => x._id !== propertyId));

    }

    const contextValues = {
        properties,
        onCreateSubmit,
        onPropertyEditSubmit,
        getProperty,
        deleteProperty,
        getAllProperties,
    }

    return (
        <>
            <PropertyContext.Provider value={contextValues}>
                {children}
            </PropertyContext.Provider>
        </>
    );

}

export const usePropertyContext = () => {

    const context = useContext(PropertyContext);

    return context;
}