import {axiosServicePlaceholder} from "./axios.service";
import {urlsPlaceholder} from "../configs";

export const postService = {
    getAll: () => axiosServicePlaceholder.get(urlsPlaceholder.posts).then(value => value.data),
}
