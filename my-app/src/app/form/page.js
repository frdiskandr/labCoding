"use client";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
const schema = Joi.object({
    title: Joi.string().required().messages({
        "string.empty": "butuh title",
        "any.required": "butuh title",
    }),
    description: Joi.string().required(),
    date: Joi.date().default(new Date()).optional(),
});

const errMessage = ({ message }) => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-red-500">{message}</span>
        </div>
    );
};

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem("data", JSON.stringify(data));
    };

    return (
        <>
            <div className="w-full h-screen relative">
                <div className="absolute w-1/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-2 bg-slate-600 p-6 rounded"
                    >
                        <span className="text-2xl">Input field</span>
                        <label htmlFor="title">Title : </label>
                        <input
                            className="rounded p-2 bg-slate-200 text-slate-900"
                            type="text"
                            name="title"
                            id="title"
                            {...register("title")}
                        />
                        <span className="text-red-500">
                            {errors.title?.message}
                        </span>
                        <label htmlFor="description">Description : </label>
                        <input
                            className="rounded p-2 bg-slate-200 text-slate-900"
                            type="text"
                            name="decription"
                            id="description"
                            {...register("description", {
                                required: "Description is required",
                            })}
                        />
                        <span className="text-red-500">
                            {errors.description?.message}
                        </span>
                        <label htmlFor="date">Title : </label>
                        <input
                            className="rounded p-2 bg-slate-200 text-slate-900"
                            type="date"
                            name="date"
                            id="date"
                            {...register("date")}
                        />
                        <span className="text-red-500">
                            {errors.date?.message}
                        </span>
                        <button
                            className="bg-slate-900 p-2 rounded-md hover:bg-slate-800 transition-all duration-300"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {errors ? errMessage(errors) : null}
        </>
    );
}
