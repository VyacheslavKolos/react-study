import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const UserService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data)
}