import axios from "axios";

import baseURL from "../configs/urls";
import baseUrlPlaceholder from "../configs/urls-placeholder";

export const axiosService = axios.create({
    baseURL
});

export const axiosServicePlaceholder = axios.create({
    baseURL: baseUrlPlaceholder
});