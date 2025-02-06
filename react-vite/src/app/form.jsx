import { useForm } from "react-hook-form";

function Form () {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log("successs");
        console.warn(data)
    }
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-stone-400 gap-4 p-2">
            <label>
                username: 
                <input type="text" name="username" {...register("username")}/>
            </label>
            <label>
                password: 
                <input type="password" name="password" {...register("password")}/>
            </label>
            <label>
                confirm password:
                <input type="password" name="confirmPassword" {...register("confirmPassword")}/>
            </label>
            <button>Submit</button>
        </form>
        </>
    )
}

export default Form;