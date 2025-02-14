"use client";
import Form from "@/components/layout/form";
import Input from "@/components/atom/input";
import { useForm } from "react-hook-form";
import useLoading from "@/hooks/globalState/isLoading";
import Loading from "@/components/layout/loading";
import { useRef } from "react";
import { useRouter } from "next/navigation";

function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { isLoading, setIsLoading } = useLoading();
    const ref = useRef(null);

    const route = useRouter();

    function submit(data) {
        console.log(data);
        setIsLoading(true);
        ref.current.style.display = "none";
        setTimeout(() => {
            setIsLoading(false);
            route.push("/");
        }, 4000);
    }

    return (
        <>
            <div
                ref={ref}
                className="w-full h-screen flex justify-center items-center"
            >
                <Form onSubmit={handleSubmit(submit)} title="Login">
                    <label>
                        Username
                        <Input
                            type="text"
                            placeholder="username"
                            register={register("username", {
                                required: "Username is required",
                            })}
                        />
                        <p className="text-red-500">
                            {errors.username?.message}
                        </p>
                    </label>
                    <label>
                        Password
                        <Input
                            type="password"
                            placeholder="password"
                            register={register("password")}
                        />
                        <p>{errors.password?.message}</p>
                    </label>
                    <p>
                        You already have an account?{" "}
                        <a href="/register">Register</a>
                    </p>
                </Form>
            </div>

            {isLoading && <Loading />}
        </>
    );
}

export default LoginPage;
