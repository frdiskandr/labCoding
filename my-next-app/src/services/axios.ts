import axios from "axios";

export const TodosApi = axios.create({
    baseURL: 'http://localhost:3000/api'
})