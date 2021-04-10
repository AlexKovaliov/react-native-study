import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reqres.in'
})

// type
export type UsersType = {
    id: number
    email: string
    first_name: string,
    last_name: string,
    avatar: string
}

// api
export const usersAPI = {
    getUsers() {
        return instance.get("/api/users?page=2")
            .then((res) => res.data)
    },
    chosenPerson(id: number) {
        return instance.get(`/api/users/${id}`)
            .then((res) => res.data)
    },
}
