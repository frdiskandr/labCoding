import axios from "axios";

export const TodosApi = axios.create({
    baseURL: 'http://localhost:5000'
})