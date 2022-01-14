import {urls} from "../conifgs/urls";

const getAll=()=>{
    return fetch(urls.users)
    .then(value => value.json())
}
const getById=(id)=>{
    return fetch(`${urls.users}/${id}`)
        .then(value => value.json())
}
export const userService={
    getAll,
    getById
}