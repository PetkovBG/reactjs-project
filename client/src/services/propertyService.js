import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/properties';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    const properties = Object.values(result);

   return properties;


}