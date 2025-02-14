'use client'

import { Button } from "../atom/button";

function Form(props) {
    const { children, onSubmit, title, type } = props;
    return (
        <form type={type} onSubmit={onSubmit} className="flex flex-col gap-2 border-none bg-slate-800 rounded-sm w-full p-4">
            <h1 className="text-3xl self-center">{title}</h1>
            {children}
            <Button type="submit">Submit</Button>
        </form>
    );
}
export default Form;