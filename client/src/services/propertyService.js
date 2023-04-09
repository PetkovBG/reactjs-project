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

    const create = async (propertyData) => {
        const result = await request.post(baseUrl, propertyData);

        return result;
    };

    const deleteProperty = async (propertyId) => {
        const result = request.delete(`${baseUrl}/${propertyId}`);
    };

    const edit = async (propertyId, data) => request.put(`${baseUrl}/${propertyId}`, data);

    return {
        getAll,
        getOne,
        create,
        delete: deleteProperty,
        edit,
    }

}

