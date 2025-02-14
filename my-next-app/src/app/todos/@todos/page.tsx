"use client";
import React, { useEffect, useState } from "react";
import { TodosApi } from "~/services/axios";

function RenderTodos() {
    const [datas, setDatas] = useState([]);

    const getData = async () => {
        try {
            const res: any = await TodosApi.get("/todos");
            setDatas(res.data);
            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container mx-auto w-full flex flex-wrap">
            {datas.map((data: any) => {
                return (
                    <div className="w-1/2 sm:w-1/4 p-2">
                        <div key={data.id} className="w-full bg-slate-700">
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                            <h6>{data.completed}</h6>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default RenderTodos;
