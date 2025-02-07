'use client'
import { useState, useEffect } from "react";

function List (){
    const [data, setData] = useState([]);

    const getData = async () => {
        try{
            await fetch("http://localhost:3000/api/data",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json()).then((res) => {setData(res)}).then((res) => console.log(res));
        }catch (error) {
            console.log(error);
        }
    } 

    useEffect(() => {
        getData();
    }, [data])

    console.log(data)

    return (
        <div className="w-full h-screen bg-indigo-950">
            <h1>List</h1>
            <ul>
                {data? data.forEach((item, index) => <li key={index}>{item.title}</li>): null}
            </ul>
        </div>
    )
}

export default List;