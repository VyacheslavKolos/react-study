import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const albumService = {
    getById: (id) => axiosService.get(`${urls.albums}?userId=${id}`).then(value => value.data),
    getPhotosById: (id) => axiosService.get(`${urls.photos}?albumId=${id}`).then(value => value.data)
};