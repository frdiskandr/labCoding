"use client";
import { TodosApi } from "~/services/axios";
import Button from "../atom/buttom";
import Input from "../atom/input";
import Form from "../fragment/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormType = {
    title: string;
    description: string;
    completed: boolean; 
}

export function AddTodo() {
    const route = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormType>();

    async function Submit(data : any) {
        try{
            setLoading(true);
            data.date = new Date();
           await TodosApi.post("/todos", data);
            setLoading(false);
            route.prefetch("/todos");
        }catch(e){
            console.log(e)
        }
    }
    return (
        <div className="w-full  flex justify-center items-center">
            <Form onSubmit={handleSubmit(Submit)}>
                <div className="w-1/2 flex flex-col gap-2">
                    <Input
                        type="text"
                        placeholder="Title"
                        register={register("title")}
                        className="p-2 text-black"
                    />
                    <Input
                        type="text"
                        placeholder="Description"
                        register={register("description")}
                        className="p-2 text-black"
                    />
                    <Input
                        type="checkbox"
                        placeholder="Completed"
                        register={register("completed")}
                        className="p-2 text-black"
                    />
                    <Button props={{disabled: loading}}>Submit</Button>
                </div>
            </Form>
        </div>
    );
}
