import {axiosServicePlaceholder} from "./axios.service";
import {urlsPlaceholder} from "../configs";

export const usersService = {
    getAll: () => axiosServicePlaceholder.get(urlsPlaceholder.users).then(value => value.data),
}
