import fs from 'fs';

type Todo = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

const Get = async () => {
    try{
        const data = fs.readFileSync('./data.json', 'utf-8');
        return JSON.parse(data);
    }catch(e){
        return e
    }
}

const Create = async (req: Todo) =>{
    try{
        const data = fs.readFileSync('./data.json', 'utf-8');
        if(!data) {
            fs.writeFileSync('./data.json', JSON.stringify([]))
        }
        const todos = JSON.parse(data);
        todos.push(req);
        fs.writeFileSync('./data.json', JSON.stringify(todos));
        return {message: "Created", req}
    }catch(e){
        return e
    }
}

const UpdateById = async (req: Todo) => {
    try{
        const {id} = req;
        const data = fs.readFileSync('./data.json', 'utf-8');
        const todos = JSON.parse(data);
        todos.map((todo: Todo) => {
            if(todo.id === id){
                todo.title = req.title;
                todo.description = req.description;
                todo.completed = req.completed;
            }
        })
        fs.writeFileSync('./data.json', JSON.stringify(todos));
        return {message: "Updated", req}
    }catch(e){
        return e
    }
}

const DeleteById = async (req: Todo) => {
    try{
        const {id} = req;
        const data = fs.readFileSync('./data.json', 'utf-8');
        const todos = JSON.parse(data);
        const newTodos = todos.filter((todo: Todo) => todo.id !== id);
        fs.writeFileSync('./data.json', JSON.stringify(newTodos));
        return {message: "Deleted", req}
    }catch(e){
        return e
    }
}

export {Create, Get, UpdateById, DeleteById};