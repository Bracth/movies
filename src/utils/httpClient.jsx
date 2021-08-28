const API = "https://api.themoviedb.org/3";

export function get(path) {
return fetch(API + path, {
    headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDBkNDM3ZTEyYzgwYmJkNjMzMmUxMDEzY2VjZWVmOSIsInN1YiI6IjYxMDU2ZGEwNGYzM2FkMDAyZDkwZWQxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g3z1htSL8YWLOnfKCBUTIccCN5Fn7YcmJTQipsknW48",
    "Content-Type": "application/json;charset=utf-8",
    },
}).then(result => result.json());
}