import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    updateById:(id,car)=>axiosService.patch(`${urls.cars}/${id}`,car).then(value => value.data)

}
