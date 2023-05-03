// export const API_BSE_URL = "https://dev.bonkersapp.com";
// export const LOGIN = API_BSE_URL + "/api/login";
export const API_BSE_URL = "https://dummyjson.com";
export const getUrlApi = (endPoint) => API_BSE_URL +endPoint;
export const POSTS = getUrlApi('/products');
export const DELETE_POST = getUrlApi('/posts/1')