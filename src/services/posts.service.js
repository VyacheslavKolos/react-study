import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const postsService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getPostsByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`).then(value => value.data),
    getCommentsById: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
};