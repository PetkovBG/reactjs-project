import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/properties';


export const propertyServiceFactory = (token) => {

    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);

        const properties = Object.values(result);

        return properties;


    }

    const getOne = async (propertyId) => {

        const result = await request.get(`${baseUrl}/${propertyId}`);

        return result;

    };

    return {
        getAll,
        getOne,

    }

}

