"use client";
import { Button } from "@/components/atom/button";
import { useState, useEffect } from "react";

function List() {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            await fetch("http://localhost:3000/api/data", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    setData(res);
                })
                .then((res) => console.log(res));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(data);

    return (
        <div className="w-full h-screen bg-gray-900">
            <div className="container mx-auto p-4">
                <h1>List Todos</h1>
                <div className="flex flex-row flex-wrap">
                    <div
                        id="card"
                        className="w-1/2 p-2 sm:w-1/4 flex flex-col"
                    >
                        <div className="w-full h-full bg-black rounded text-white flex flex-col p-2">
                            <span>title</span>
                            <span>description</span>
                            <Button onClick={() => console.log("delete")} className="w-1/2 self-end" >Delete</Button>
                        </div>
                    </div>
                    <div
                        id="card"
                        className="w-1/2 p-2 sm:w-1/4 flex flex-col"
                    >
                        <div className="w-full h-full bg-black rounded text-white">
                            test
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
