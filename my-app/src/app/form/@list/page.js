'use client'
import { useState, useEffect } from "react";

function List (){
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("data")));
    },[data])
    
    return (
        <div className="w-full h-screen bg-indigo-950">
            <h1>List</h1>
            <ul>
                {data? data.map((item, index) => {
                    return (<>
                    <li key={index}>{item?.title}</li>
                    <li>{item?.description}</li>
                    <li>{item?.date}</li>
                    </>
                    )
                }): null}
            </ul>
        </div>
    )
}

export default List;