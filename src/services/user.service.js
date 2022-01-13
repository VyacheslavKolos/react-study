const getAll()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
}
const getById(id)=>{
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(value => value.json())
}
export const userService={
    getAll,
    getById
}