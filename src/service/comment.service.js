import {axiosServicePlaceholder} from "./axios.service";
import {urlsPlaceholder} from "../configs";

export const commentService = {
    getAll: () => axiosServicePlaceholder.get(urlsPlaceholder.comments).then(value => value.data),
}
