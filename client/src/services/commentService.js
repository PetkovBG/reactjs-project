import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/comments'

const request = requestFactory();

export const create = async (propertyId, comment) => {
    console.log(propertyId);
    console.log(comment);
    const result = await request.post(baseUrl, { propertyId, comment });

    console.log("Log from commentService create", result);

    return result;
}

export const getAll = async (gameId) => {

    const searchQuery = encodeURIComponent(`gameId="${gameId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`)
    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);

    const comments = Object.values(result);

    console.log('Log from commentService getAll', comments);

    return comments;

}